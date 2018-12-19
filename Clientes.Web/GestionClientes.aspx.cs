using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Clientes.Infrastructura;
using Clientes.Infrastructura.Datos;

namespace Clientes.Web
{
    public partial class GestionClientes : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [System.Web.Services.WebMethod]
        public static string Guardar(int id, string nombre, string apellidos, int telefono, string email){
            String resultado = String.Empty;

            try
            {
                Cliente cliente = new Cliente();
                cliente.nombre = nombre;
                cliente.id = id;
                cliente.apellidos = apellidos;
                cliente.Telefono = telefono;
                cliente.email = email;

                ConexionDB conexion = new ConexionDB();

                conexion.insertar(cliente);
                resultado = "OK";

            }
            catch (Exception e)
            {

                resultado = "Error " + e.Message;
            }

            return resultado;
        }
        
    }
}