using BackEndSIGE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Infrastructure
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<User> User { get; set; }

        public DbSet<Ocorrencias> Ocorrencias { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(ConfigureUser);
            modelBuilder.Entity<Ocorrencias>(ConfigureOcorrencia);
        }

        private void ConfigureUser(EntityTypeBuilder<User> builder)
        {
            builder.Property(sa => sa.Userid)
                .HasColumnType("varchar(1000)");
            builder.Property(sa => sa.Photo)
                .HasColumnType("varchar(500)");
            builder.Property(sa => sa.Name)
                .HasColumnName("username")
                .HasColumnType("varchar(200)");
            builder.Property(sa => sa.GivenName)
                .HasColumnType("varchar(100)");
            builder.Property(sa => sa.FamilyName)
                .HasColumnType("varchar(100)");
            builder.Property(sa => sa.Email)
                    .HasColumnType("varchar(200)");
        }

        private void ConfigureOcorrencia(EntityTypeBuilder<Ocorrencias> builder)
        {
            builder.Property(sa => sa.br)
                .HasColumnName("br");
            builder.Property(sa => sa.ocorrencia)
                .HasColumnName("ocorrencia ")
                .IsRequired();
            builder.Property(sa => sa.causa_acidente)
               .HasColumnName("causa_acidente");
            builder.Property(sa => sa.classificacao_acidente)
               .HasColumnName("classificacao_acidente");
            builder.Property(sa => sa.condicao_metereologica)
               .HasColumnName("condicao_metereologica");
            builder.Property(sa => sa.data_hora)
               .HasColumnName("data_hora");
            builder.Property(sa => sa.delegacia)
               .HasColumnName("delegacia");
            builder.Property(sa => sa.dia_semana)
               .HasColumnName("dia_semana");
            builder.Property(sa => sa.fase_dia)
               .HasColumnName("fase_dia");
            builder.Property(sa => sa.feridos)
               .HasColumnName("feridos");
            builder.Property(sa => sa.feridos_graves)
               .HasColumnName("feridos_graves");
            builder.Property(sa => sa.feridos_leves)
               .HasColumnName("feridos_leves");
            builder.Property(sa => sa.horario)
               .HasColumnName("horario");
            builder.Property(sa => sa.ignorados)
              .HasColumnName("ignorados");
            builder.Property(sa => sa.ilesos)
              .HasColumnName("ilesos");
            builder.Property(sa => sa.km)
              .HasColumnName("km");
            builder.Property(sa => sa.latitude)
              .HasColumnName("latitude");
            builder.Property(sa => sa.longitude)
              .HasColumnName("longitude");
            builder.Property(sa => sa.mortos)
              .HasColumnName("mortos");
            builder.Property(sa => sa.municipio)
              .HasColumnName("municipio");
            builder.Property(sa => sa.pessoas)
              .HasColumnName("pessoas");
            builder.Property(sa => sa.regional)
              .HasColumnName("regional");
            builder.Property(sa => sa.sentido_via)
              .HasColumnName("sentido_via");
            builder.Property(sa => sa.tipo_acidente)
              .HasColumnName("tipo_acidente");
            builder.Property(sa => sa.tipo_pista)
              .HasColumnName("tipo_pista");
            builder.Property(sa => sa.tracado_via)
              .HasColumnName("tracado_via");
            builder.Property(sa => sa.uf)
              .HasColumnName("uf");
            builder.Property(sa => sa.uop)
              .HasColumnName("uop");
            builder.Property(sa => sa.uso_solo)
              .HasColumnName("uso_solo");
            builder.Property(sa => sa.veiculos)
             .HasColumnName("veiculos");
        }
    }
}
