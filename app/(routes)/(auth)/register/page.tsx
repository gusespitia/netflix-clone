import Link from "next/link";
import Terms from "../components/Terms/Terms";
import RegisterForm from "./registerForm/RegisterForm";

const RegisterPage = () => {
    return ( <div className="">
        <p className="text-left text-3xl font-bold mb-7">Registro de Nuevo Usuario</p>
   <RegisterForm />
   <div className="flex mt-4 gap-1">
    <p className="text-white opacity-70">Ya tienes cuenta?</p>
    <Link href="/login" className="opacity-1 text-white">
      Iniciar Sesión aquí
    </Link>
    </div>
    <Terms />
   </div>
    );
}
 
export default RegisterPage;