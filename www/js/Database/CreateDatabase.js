
function _createDatabase() {
    
    var db = window.openDatabase("BibliaOffLine", "1.0", "Biblia Free", 200000);
    db.transaction(_createTableAndPopulation, errorCB, successCB);
}


function getDataBase()
{
    return window.openDatabase("BibliaOffLine", "1.0", "Biblia Free", 200000);
}


function _createTableAndPopulation(tx) {
    _Versao(tx);
    _Testamentos(tx);
    _Livros(tx);
}

// Transaction error callback
//
function errorCB(tx, err) {
    alert("Error processing SQL: " + JSON.stringify(err, null, 4));
}

// Transaction success callback
//
function successCB() {
    log("success!");
}

function _Versao(tx) {

    isTableExists(tx, "versoes", function (status) {
        if (!status) {

            tx.executeSql('CREATE TABLE IF NOT EXISTS versoes (vrs_id unique,  vrs_nome TEXT)');

            tx.executeSql('INSERT INTO versoes (vrs_id, vrs_nome) VALUES (0, "Não Identificada")');
            tx.executeSql('INSERT INTO versoes (vrs_id, vrs_nome) VALUES (1, "Almeida Revisada Imprensa Bíblica")');
            tx.executeSql('INSERT INTO versoes (vrs_id, vrs_nome) VALUES (2, "Almeida Corrigida e Revisada Fiel")');
            tx.executeSql('INSERT INTO versoes (vrs_id, vrs_nome) VALUES (3, "Nova Versão Internacional")');
            tx.executeSql('INSERT INTO versoes (vrs_id, vrs_nome) VALUES (4, "Sociedade Bíblica Britânica")');
            tx.executeSql('INSERT INTO versoes (vrs_id, vrs_nome) VALUES (5, "Almeida Revista e Atualizada")');

        }
    });
}

function _Testamentos(tx) {

    isTableExists(tx, "testamentos", function (status) {
        if (!status) {

            tx.executeSql('CREATE TABLE IF NOT EXISTS testamentos ( tes_id unique,  tes_nome TEXT)');
            tx.executeSql('INSERT INTO testamentos (tes_id, tes_nome) VALUES (1, "Antigo Testamento")');
            tx.executeSql('INSERT INTO testamentos (tes_id, tes_nome) VALUES (2, "Novo Testamento")');

            alert("Tabela de Testamento criada com sucesso!");
        }
    });
}



function _Livros(tx) {

    isTableExists(tx, "livros", function (status) {
        if (!status) 
            {
            alert("Tabela livros nao existe!");

            tx.executeSql('CREATE TABLE IF NOT EXISTS livros (liv_id unique,  liv_tes_id INTEGER ,  liv_posicao INTEGER ,  liv_nome TEXT)');

            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(1, 1, 1, "Genesis")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(2, 1, 2, "Exodo")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(3, 1, 3, "Levitico")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(4, 1, 4, "Numeros")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(5, 1, 5, "Deuteronomio")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(6, 1, 6, "Josue")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(7, 1, 7, "Juizes")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(8, 1, 8, "Rute")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(9, 1, 9, "I Samuel")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(10, 1, 10, "II Samuel")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(11, 1, 11, "I Reis")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(12, 1, 12, "II Reis")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(13, 1, 13, "I Cronicas")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(14, 1, 14, "II Cronicas")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(15, 1, 15, "Esdras")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(16, 1, 16, "Neemias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(17, 1, 17, "Ester")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(18, 1, 18, "Jo")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(19, 1, 19, "Salmos")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(20, 1, 20, "Proverbios")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(21, 1, 21, "Eclesiastes")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(22, 1, 22, "Cantico dos Canticos")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(23, 1, 23, "Isaias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(24, 1, 24, "Jeremias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(25, 1, 25, "Lamentacoes Jeremias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(26, 1, 26, "Ezequiel")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(27, 1, 27, "Daniel")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(28, 1, 28, "Oseias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(29, 1, 29, "Joel")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(30, 1, 30, "Amos")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(31, 1, 31, "Obadias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(32, 1, 32, "Jonas")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(33, 1, 33, "Miqueias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(34, 1, 34, "Naum")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(35, 1, 35, "Habacuque")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(36, 1, 36, "Sofonias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(37, 1, 37, "Ageu")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(38, 1, 38, "Zacarias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(39, 1, 39, "Malaquias")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(40, 2, 1, "Mateus")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(41, 2, 2, "Marcos")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(42, 2, 3, "Lucas")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(43, 2, 4, "Joao")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(44, 2, 5, "Atos")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(45, 2, 6, "Romanos")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(46, 2, 7, "I Corintios")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(47, 2, 8, "II Corintios")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(48, 2, 9, "Galatas")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(49, 2, 10, "Efesios")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(50, 2, 11, "Filipenses")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(51, 2, 12, "Colossenses")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(52, 2, 13, "I Tessalonicenses")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(53, 2, 14, "II Tessalonicenses")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(54, 2, 15, "I Timoteo")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(55, 2, 16, "II Timoteo")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(56, 2, 17, "Tito")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(57, 2, 18, "Filemom")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(58, 2, 19, "Hebreus")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(59, 2, 20, "Tiago")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(60, 2, 21, "I Pedro")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(61, 2, 22, "II Pedro")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(62, 2, 23, "I Joao")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(63, 2, 24, "II Joao")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(64, 2, 25, "III Joao")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(65, 2, 26, "Judas")');
            tx.executeSql('INSERT INTO livros (liv_id, liv_tes_id, liv_posicao, liv_nome) VALUES(66, 2, 27, "Apocalipse")');
        }
    });

}



function isTableExists(tx, tableName, callback) {
    tx.executeSql('SELECT * FROM ' + tableName, [], function (tx, resultSet) {
        if (resultSet.rows.length <= 0) {
            callback(false);
        } else {
            callback(true);
        }
    }, function (err) {
        callback(false);
    });
}