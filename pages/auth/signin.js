import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
//Browser
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex items-center flex-col justify-center py-2 min-h-screen -mt-36 px-14 text-center">
        <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 rounded-lg bg-blue-500 text-white"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//Server side rendering
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
export default signIn;
