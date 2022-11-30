var temp = JSON.parse('{"jurisdiccion":"AND","canal":"AW","accion":"V","radicalDebito":"4145012","generoDebito":"001","rubricaDebito":"000","monedaDebito":"001","ibanDebito":"","ibanDebitoMoneda":"","radicalCredito":null,"generoCredito":null,"rubricaCredito":null,"monedaCredito":null,"ibanCredito":"CR23015108410026012345","ibanCreditoMoneda":null,"divisa":"EUR","importe":"3","indicadorGastos":"S","indicadorTraspasos":"N","debitoAviso":"","creditoAviso":"","concepto":"Test","ordCuenta":"","ordNombre":"","ordDireccion":"","ordCiudadPais":"","benBICBanco":"BNCRCRSJXXX","benCuenta":null,"benNombre":"Jack01","benDireccion":"San Martin 08170","benCodigoPostal":"C","benCiudad":"Costa Rica","benPais":"CRI","origen":null,"referencia":null,"lplpro":null,"lplid":null,"lplref":null,"lplseq":null,"resumeCode":null,"bicCode":null,"radical":null,"radicalStatus":null,"destinationIndicator":null,"sepaIndicator":null,"restUserCode":"APP_WEALTH_PRE","password":"6%6TgHYd","userCode":"usr4156360"}');


var salida = Object.entries(temp).map(_=>{
  return _[0] + ':' + _[1];
})

salida.forEach(_=>{
console.log(_);
})
