import UserNavbar from "@/app/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Orders = () => {
  return (
    <div>
      <UserNavbar />
      <div className="min-h-screen bg-pink-lighter flex items-center justify-center">
        <Head>
          <title>Pedidos</title>
        </Head>
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 max-h-[600px] overflow-y-auto w-[600px]">
          <h1 className="text-xl font-semibold text-center">Pedidos</h1>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="w-24 h-24 relative rounded">
                <Image
                  src="/images/placeholder.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex-1 border-b">
                <div className="pb-2">ID:</div>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/pages/users/orderDetails">
                  <button className="boton-global mr-3">Detalles</button>
                </Link>

                <label className="text-sm">
                  Estado: Pendiente de confirmación
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
