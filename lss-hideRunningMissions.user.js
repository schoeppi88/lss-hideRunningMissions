// ==UserScript==
// @name         LSS Hide Running Missions
// @version      0.1
// @description  Laufende Einsätze und Einsätze mit wenig Credits werden ausgeblendet
// @author       Schoeppi88
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// @run          document-start
// ==/UserScript==

function arrayContains(needle, arrhaystack)
{
    return (arrhaystack.indexOf(needle) > -1);
}

setInterval(function () {

  $( 'div.missionSideBarEntry' ).each(function( i ) {

      /* mission_id and type */
      var mid = $(this).attr('mission_id');
      var mtype = $(this).attr('mission_type_id');

      /* Disable Missions */
      var disableMissions = ['1','2','3','4','6','7','8','9','10',
                             '11','13','17','18',
                             '23','24','27',
                             '31',
                             '60','61','62','63','64','65','66','67','68','69',
                             '70','71','73','74','76','77','78',
                             '81','82','85','88',
                             '90','91','94','98',
                             '122','128',
                             '143','144','145','148','149','150',
                             '152','153','154','159','160',
                             '168','169','170',
                             '172','173',
                             '188','189','190',
                             '191',
                             '148',
                             '209',
                             '241'];

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

      if( arrayContains(mtype, disableMissions) ) {
          $( 'div#mission_' + mid ).css('display','none');
      } else {

      if( color == 'red' ){
        $( 'div#mission_panel_' + mid ).css('display','block');
      }else if(color == 'yellow'){

              $( 'div#mission_panel_' + mid ).css('display','none');

      }else if(color == 'green'){

          if( mpats === true && pris === true ){
              $( 'div#mission_panel_' + mid ).css('display','none');
          }

      }

      }

  });

    },15000);
