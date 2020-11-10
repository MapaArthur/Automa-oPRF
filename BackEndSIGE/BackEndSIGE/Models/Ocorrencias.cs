using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Models
{
    public class Ocorrencias : BaseEntity
    {
        public int ocorrencia { get; set; }
        public DateTime data_hora { get; set; }
        public string dia_semana { get; set; }
        public string horario { get; set; }
        public string uf { get; set; }
        public int br { get; set; }
        public decimal km { get; set; }
        public string municipio { get; set; }
        public string causa_acidente { get; set; }
        public string tipo_acidente { get; set; }
        public string classificacao_acidente { get; set; }
        public string fase_dia { get; set; }
        public string sentido_via { get; set; }
        public string condicao_metereologica { get; set; }
        public string tipo_pista { get; set; }
        public string tracado_via { get; set; }
        public string uso_solo { get; set; }
        public int pessoas { get; set; }
        public int mortos { get; set; }
        public int feridos_leves { get; set; }
        public int feridos_graves { get; set; }
        public int ilesos { get; set; }
        public int ignorados { get; set; }
        public int feridos { get; set; }
        public int veiculos { get; set; }
        public decimal latitude { get; set; }
        public decimal longitude { get; set; }
        public string regional { get; set; }
        public string delegacia { get; set; }
        public string uop { get; set; }
    }
}
