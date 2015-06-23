/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        pageLivros();
        
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        _createDatabase();
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);

        
    }
};



function openPainel() { $("#mypanel").panel("open"); }

function pageLivros()
{
    /*$.mobile.loading('show', {
        text: 'foo',
        textVisible: true,
        theme: 'z',
        html: ""
    });*/
    loadLivros();
    $.mobile.changePage("#paginaLivros", { reverse: false, transition: "flip" });
}


function loadLivros()
{
    var db = getDataBase()
    db.transaction(queryTestamento, errorCB);
}

function queryTestamento(tx) {

    $('#ulLivros').html("");

    tx.executeSql('SELECT * FROM testamentos', [], function (tx, results) {
        
        var len = results.rows.length;

        for (var i = 0; i < len; i++) {
            queryLivros(tx, results.rows.item(i));
        }

    }, errorCB);
}

function queryLivros(tx, row) {
    
    tx.executeSql('SELECT * FROM livros WHERE liv_tes_id = ' + row.tes_id, [], function (tx, results) {

        $('#ulLivros').append('<li data-role="list-divider">' + row.tes_nome + '</li>');

        var len = results.rows.length;
        
        for (var i = 0; i < len; i++) {
            $('#ulLivros').append('<li><a href="#">' + results.rows.item(i).liv_nome + '</a></li>');
        }

        $("#ulLivros").listview("refresh");
    }, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
    
    $('#ulLivros').html("");
    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        $('#' + pUl).append('<li><a href="#">' + results.rows.item(i).liv_nome + '</a></li>');
    }

    $("#ulLivros").listview("refresh");
}


