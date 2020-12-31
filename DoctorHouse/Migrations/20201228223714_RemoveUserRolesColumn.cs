using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class RemoveUserRolesColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserRole",
                table: "Users");

            migrationBuilder.AddColumn<bool>(
                name: "IsAdmin",
                table: "Users",
                type: "bit",
                nullable: false);
        }

    protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserRole",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.DropColumn(
                name: "IsAdmin",
                table: "Users");
        }
    }
}
