function CalculaImposto() {

	//Pega o valor do input
	var horas       = document.getElementById("horas").value; 
	var valor       = document.getElementById("valor").value;
	var dependentes = document.getElementById("dependentes").value;

	var salarioB    =  horas * valor;
    var sl          =0;
	var salair      =0;
	// Tabela do INSS
	var inssInf8    = 0;
	var inssSup8    = 1751.81;
	var inssInf9    = 1751.82;
	var inssSup9    = 2919.72;
	var inssInf11   = 2919.73;
	var inssSup11   = 5839.45;
	
    // Tabela do IR
	var irInf0      = 0;
	var irSup0      =1903.98;
	var irInf75     =1903.99;
	var irSup75     =2826.65;
	var irInf15     =2826.66;
	var irSup15     =3751.05;
	var irInf225    =3751.06;
	var irSup225    =4664.68;
	var irInf275    =4664.69;
	//dedução
	var ded1=142.80;
	var ded2=354.80;
	var ded3=636.13;
	var ded4=869.36;
	
	//  Variáveis
	var inss;
	var valorDep = 189.59;
	var ir;

	// Identifica o percentual INSS
	if (salarioB >= inssInf8 && salarioB <= inssSup8) 
		inss = 0.08* salarioB;
     else
	if (salarioB >= inssInf9 && salarioB <= inssSup9) 
		inss = 0.09*salarioB;
     else
	if (salarioB <= inssInf11)
		inss =0.11*salarioB;
	  else
      inss= 642.34
	
	// Calcula o INSS
	
	salair = salarioB-inss-(valorDep * dependentes);
	
	// Identifica o percentual IR
	if (salair <= irSup0) 
		 ir = 0.0;
	 else
	if (salair  >= irInf75  && salair <=irSup75 )
		 ir = salair * 0.075 - ded1;
	 else
	 
	if (salair  >= irInf15  && salair <=irSup15 )
		 ir = salair * 0.15 - ded2;
	 else
	 if (salair  >= irInf225  && salair <=irSup225 )
		 ir = salair * 0.225 - ded3;
	 else
	 if (salair  >= irInf275)
		 ir = salair * 0.275 - ded4;

    
	// Calcula o salario liquido
	sl = salarioB - inss - ir ;

	document.getElementById("Inss").innerHTML =`<h3>INSS:${inss}</h3>`;
	document.getElementById("IR").innerHTML = `<h3>IR:${ir}</h3>" `;
    document.getElementById("SalarioLiquido").innerHTML =`<h3>Salario liquido:${sl}</h3>  `;		
	document.getElementById("ndepedentes").innerHTML =`<h3>N° Dependentes:${depedentes}</h3>  `;
}