using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clientes.Infrastructura.Datos
{
    public class Cliente
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public int Telefono { get; set; }
        public String email  { get; set; }
    }
}
