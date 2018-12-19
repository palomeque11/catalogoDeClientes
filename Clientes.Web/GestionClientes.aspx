<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaPrincipal.Master" AutoEventWireup="true" CodeBehind="GestionClientes.aspx.cs" Inherits="Clientes.Web.GestionClientes" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/principal.js"></script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table>
        <tr>
            <td class="celdaPropiedad">
                Id: 
            </td>
            <td class="celdaValor">
                <input id="textoId" type="text" title="usar 3 digitos" pattern="[0-9]{3}" class="form-control" style="width:350px" maxlength="3" />
            </td>
            <td>*numero de tres digitos</td>
        </tr>
        <tr>
            <td class="celdaPropiedad">
                Nombre: 
            </td>
            <td class="celdaValor">
                <input id="textoNombre" type="text" class="form-control" style="width:350px" />
            </td>
        </tr>
        <tr>
            <td class="celdaPropiedad">
                Apellidos: 
            </td>
            <td class="celdaValor">
                <input id="textoApellidos" type="text" class="form-control" style="width:350px" />
            </td>
        </tr>
        <tr>
            <td class="celdaPropiedad">
                Telefono: 
            </td>
            <td class="celdaValor">
                <input id="textoTelefono" type="text" title="usar 10 digitos" pattern="[0-9]{10}" class="form-control" style="width:350px" maxlength="10" />
            </td>
        </tr>
        <tr>
            <td class="celdaPropiedad">
                Email: 
            </td>
            <td class="celdaValor">
                <input id="textoEmail" type="email" class="form-control" style="width:350px" maxlength="30" />
            </td>
        </tr>
        <tr>
            <td colspan="4" class="alerta">
                <p id="demo" class="alerta"></p>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="text-align:center; padding-top:45px;">
                <button id="botonGuardar" type="button"  onClick="validacionCliente()" class="btn btn-sm btn-primary" title="Pulsa para guardar la información">
                    Guardar
                </button>
   

            </td>
        </tr>
    </table>
   

</asp:Content>
