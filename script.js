const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
};

function getTheCurse(alunoObj) {
    return alert(`O aluno está matriculado no curso "${alunoObj.curso}"`);
}

function getTheSubjects(alunoObj) {
    return alert(`Lista de materias do aluno: ${(alunoObj.materias).join(',2 ')}`);
}

function resgistrationStatus(alunoObj) {
    return alunoObj.situacaoMatricula ? alert("O aluno está ATIVO") : alert("O aluno está INATIVO");
}

function generateStudentCard(alunoObj) {
    const cardInformation = `Nome: "${alunoObj.nome}", Idade: "${alunoObj.idade}", Curso: "${alunoObj.curso}", Instituição: "${alunoObj.instituicao}"`
    return alert(cardInformation)
}

function acessoServico() {
    const servico = prompt('1. Curso; 2. Matéria; 3. Situação de Matrícula; 4. Gerar Carteira');

    if (servico === '1' || servico === '2' || servico === '3' || servico === '4') {
        if (servico === '1') {
            return getTheCurse(alunoCurso);
        }
        else if (servico === '2') {
            return getTheSubjects(alunoCurso);
        }
        else if (servico === '3') {
            return resgistrationStatus(alunoCurso);
        }
        else {
            return generateStudentCard(alunoCurso);
        }
    }
    return alert('Serviço inválido');
}
acessoServico();