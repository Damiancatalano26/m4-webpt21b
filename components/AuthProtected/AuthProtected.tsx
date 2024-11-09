"use client"
import { useContext, useEffect, ReactNode } from "react"; 
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";

// Define las props del componente, incluyendo `children`
interface AuthProtectedProps {
  children: ReactNode; // Define el tipo de children
}

const AuthProtected = ({ children }: AuthProtectedProps) => {
  const { user, loading } = useContext(AuthContext); // Ahora se incluye `loading`
  const router = useRouter();

  useEffect(() => {
    // Redirige solo si `user` está verificado y es `null` (no autenticado)
    if (!loading && user === null) { // Solo redirige si no está cargando
      router.push("/login");
    }
  }, [user, loading, router]);

  // Mostrar un cargando mientras se verifica la autenticación
  if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga
  }

  // Renderiza `children` solo si el usuario está autenticado
  return <>{children}</>;
};

export default AuthProtected;
