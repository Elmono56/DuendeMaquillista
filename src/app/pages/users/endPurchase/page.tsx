"use client";

import React, { useState, useEffect } from "react";
import UserNavbar from "../../../components/UserNavBar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NotificationSubject } from "../../../../../backend/observer/NotificationSubject";
import { UserNotificationObserver } from "../../../../../backend/observer/UserNotificationObserver";
import { storage } from "../../../../../backend/firebase/connection"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const EndPurchase = () => {
  const [file, setFile] = useState<File>();
  const router = useRouter();
  const [idUser, setIdUser] = useState("");
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState(
    [] as Array<{
      productName: string;
      productPrice: number;
      productImage: string;
      quantity: number;
    }>
  );
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const idUser = localStorage.getItem("token");
    if (idUser) {
      setIdUser(idUser);
    }
    async function getShopCart() {
      try {
        const res = await axios.get("http://localhost:4000/api/getShopCart", { params: { user_id: idUser } });
        const transformedProducts = res.data.products.map((product: { name: string; price: number; image: string; quantity: number; }) => ({
          productName: product.name,
          productPrice: product.price,
          productImage: product.image,
          quantity: product.quantity
        }));
        setCartItems(transformedProducts);
      } catch (error) {
        console.error(error);
      }
    }
    getShopCart();
  }, []);

  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
    return total;
  };

  useEffect(() => {
    const total = calculateTotal();
    const shippingCost = total * 0.05;
    setShipping(shippingCost);
    setTotal(total);
  }, [cartItems]);

  const handleEndPurchase = async () => {
    if (!address) {
      alert("Debe ingresar una dirección");
      return;
    }
    let newAddress = address.split(",").map((str) => str.trim());
    const res2 = await axios.post("http://localhost:4000/api/createAddress", {
      userID: idUser,
      province: newAddress[0],
      canton: newAddress[1],
      district: newAddress[2],
      details: newAddress[3]
    });
    const res3 = await axios.get("http://localhost:4000/api/getAddress", { params: { userID: idUser } });
    const res = await axios.post("http://localhost:4000/api/createOrder", { 
        user_id: idUser,
        products: cartItems,
        address: res3.data._id,
        pay: Number(total),
        voucher: data.img, //aqui va {image} cuando se pueda cargar el comprobante de pago
        status: "En Espera"
    }
    );    
    console.log("Aquí: ", res.data);
    const res4 = await axios.put("http://localhost:4000/api/changeSCstatus", { user_id: idUser, status: "Procesado" });
    alert("Compra realizada con éxito, pronto recibirá su pedido");
    // se crea el observer y lo suscriben al subject (attach)
    const notificationSubject = new NotificationSubject();
    const observer = new UserNotificationObserver();
    notificationSubject.attach(observer);
    router.push("/pages/users/Shop");
  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center min-h-screen bg-pink-100">
        <div className="p-6 rounded-lg bg-white shadow-lg w-3/4 flex justify-between">
          <div className="w-1/2 pr-5">
            <h3 className="text-lg font-semibold mb-4">Resumen del Carrito</h3>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mb-4 border-b pb-2"
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-8 h-8 mr-4"
                  />
                  <span className="flex-grow">{item.productName}</span>
                  <span className="mx-4">{item.quantity}x</span>
                  <span className="font-medium w-9">
                    ${item.productPrice * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-bold mb-2">Dirección:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Provincia, Canton, Distrito, Ubicación exacta"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="w-1/2 pl-5">
            <div className="border p-4 mb-4">
              <h3 className="mb-2 font-bold">Añadir comprobante sinpe</h3>
              <input
                className="w-full p-2 border"
                type="file"
                placeholder="Subir archivo"
                onChange={(e) => {setFile(e.target.files[0]); console.log(e.target.files) }}
              />
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>Envío:</span>
              <span className="font-bold">${shipping}</span>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span>Total:</span>
              <span className="font-bold">${total + shipping}</span>
            </div>
            <div className="mt-6 flex justify-center">
              {/* <Link
                href="/pages/users/Catalog
              "
              > */}
                <button className="boton-global" onClick={handleEndPurchase}>Finalizar compra</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPurchase;
