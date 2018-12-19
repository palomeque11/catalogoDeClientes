using Clientes.Infrastructura.Datos;
using System;
using System.Data.SqlClient;

namespace Clientes.Infrastructura.Datos
{
    public class ConexionDB
    {
        SqlConnection cn;
        SqlCommand cmd;
        SqlDataReader dr;

        public ConexionDB()
        {
            try
            {
                cn = new SqlConnection("server=HP\\SQLEXPRESS ; database=ABC ; integrated security = true");
                cn.Open();

            }
            catch (Exception ex)
            {
                Console.WriteLine("No se ingreso"+ ex.Message);
            }
        }

        public string insertar(Cliente cliente)
        {
            string salida = "Se se inserto";
            try 
            {
   
                cmd = new SqlCommand("Insert into Clientes(id,nombre,apellidos,telefono,email) values(" + cliente.id + ",'" + cliente.nombre + "','" + cliente.apellidos + "','"  + cliente.Telefono + "','" + cliente.email + "')", cn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                salida = "No se conecto: " + ex.ToString();
            }
            return salida;
        }



        public int personaRegistrada(int id)
        {
            int contador = 0;
            try
            {
                cmd = new SqlCommand("Select * from Clientes where Id=" + id + "", cn);
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    contador++;
                }
                dr.Close();
            }
            catch (Exception ex)
            {
                
            }
            return contador;
        }
    }
}



