for i in range(1,5):
    nome = input('Digite seu nome: ')
    idade = int(input('Digite sua idade? '))
    salario = float(input('Digite seu salário? '))
    sexo = input("Digite seu sexo (f ou m): ")
    estado = input('Digite seu estado civil? ')

    quant = len(nome)

    if quant>3:
        print("O nome",nome,"possui mais de 3 caracteres")
    
    else:
        print("o nome",nome,"possui menos que 3 caracteres")

    if idade>= 0 or idade<=150:
        print("A idade é", idade,"e esta entre 0 e 150")

    if salario > 0:
        print("Salario de", salario,"é maior que zero")

    if sexo == "f":
        print("Sexo feminino")

    if sexo == "m":
        print("Sexo masculino")

    if estado == "s":
        print("Solteiro")

    if estado == "c":
        print("Casado")

    if estado == "v":
        print("Viuva")

    if estado == "d":
        print("Divorciado")