import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Importar el contexto de autenticación
import { useTranslation } from "react-i18next";
export default function Login() {
    const { t } = useTranslation("Login");
    const [cedula, setCedula] = useState("");
    const [apellido, setApellido] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth(); // Usar el método login del contexto

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        try {
            const response = await axios.post("http://localhost:3001/api/validar", {
                cedula,
                apellido,
            });
            if (response.data.success) {
                login(); // Marcar al usuario como autenticado
                setSuccessMessage(t("SuccessMessage"));
                setTimeout(() => {
                    navigate("/Bolsa"); // Redirigir a Bolsa
                }, 1000); // Redirigir después de 2 segundos
            } else {
                setErrorMessage(t("Error1"))
                setError(response.data.message || "Credenciales incorrectas.");
            }
        } catch (error) {
            console.error("Error en el servidor:", error);
            setError("No se pudo conectar con el servidor.");
        }
    };

    return (
        <section>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
                <form
                    className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                    onSubmit={handleLogin}
                >
                    <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                        {t("title")}
                    </h1>

                    {/* Mostrar mensajes */}
                    {error && (
                        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">{errorMessage}</span>
                        </div>
                    )}
                    {successMessage && (
                        <div className="mb-4 text-green-500 text-center">
                            {successMessage}
                        </div>
                    )}

                    {/* Campo de Cédula */}
                    <div className="relative mb-4">
                        <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder={t('Id')}
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Campo de Apellido */}
                    <div className="relative mb-6">
                        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder={t('LastName')}
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Botón de login */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        {t("Send")}
                    </button>
                </form>
            </div>
        </section>
    );
}
