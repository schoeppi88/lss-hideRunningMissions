// ==UserScript==
// @name         LSS Hide Running Missions
// @version      0.1
// @description  Laufende Einsätze werden ausgeblendet
// @author       Schoeppi88
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        GM_log
// @run          document-start
// ==/UserScript==

setInterval(function () {

  $( 'div.missionSideBarEntry' ).each(function( i ) {

      /* mission_id and type */
      var mid = $(this).attr('mission_id');
      var mtype = $(this).attr('mission_type_id');

      /* mission_color */
      var color;
      if( $( 'div#mission_panel_' + mid ).hasClass( 'mission_panel_yellow' ) ){
        color = 'yellow';
      }else if( $( 'div#mission_panel_' + mid ).hasClass( 'mission_panel_red' ) ){
        color = 'red';
      }else if( $( 'div#mission_panel_' + mid ).hasClass( 'mission_panel_green' ) ){
        color = 'green';
      }

      /* missing_patients */
      var pats = $( 'div#patients_missing_' + mid ).is(':empty');

      /* mission_patients */
      var mpats = $( 'div#mission_patients_' + mid ).is(':empty');

      /* mission_prisoners */
      var pris = $( 'div#mission_prisoners_' + mid ).is(':empty');

      /* hide running missions */
      
      if( color == 'red' ){
        $( 'div#mission_panel_' + mid ).css('display','block');
      }else if(color == 'yellow'){

              $( 'div#mission_panel_' + mid ).css('display','none');

      }else if(color == 'green'){

          if( mpats === true && pris === true ){
              $( 'div#mission_panel_' + mid ).css('display','none');
          }

      }

  });

    },15000);
