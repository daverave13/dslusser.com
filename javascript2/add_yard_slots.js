function inits() {
  let FID = 0;
  let YID = 0;
  let YZID = 0;
  let strPrefix = "";
  let strLocationHDR = "";
  let strYardZoneSlot = "";
  let strLocation = "";
  let strWhseSysCode = "";
  let startNum = 5;
  let endNum = 10;
  $("#genForm").submit(function(e) {
      e.preventDefault();
  });
}

function assignVars(plant) {
  if (plant == "ABQ") {
    FID = 436;
    YID = 388;
    YZID = 426;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "PHI") {
    FID = 376;
    YID = 328;
    YZID = 342;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "ALN") {
    FID = 30;
    YID = 22;
    YZID = 626;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "CON") {
    FID = 355;
    YID = 307;
    YZID = 324;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "DA2") {
    FID = 455;
    YID = 407;
    YZID = 465;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "DAL") {
    FID = 336;
    YID = 288;
    YZID = 306;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "DEN") {
    FID = 155;
    YID = 86;
    YZID = 104;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "GRV") {
    FID = 254;
    YID = 166;
    YZID = 184;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "HAM") {
    FID = 507;
    YID = 407;
    YZID = 465;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else if (plant == "MOR") {
    FID = 135;
    YID = 63;
    YZID = 63;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }else if (plant == "PHX") {
    FID = 276;
    YID = 226;
    YZID = 244;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }else if (plant == "STK") {
    FID = 314;
    YID = 266;
    YZID = 284;
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
  else  { //st2
    FID = 507
    YID = 407
    YZID = 465
    $("#plant-readout").css("display","inline");
    $("#plant-readout").html(plant + " selected");
  }
}

function assignPlantVar() {
  $(".plant-btn").click(function(evt) {
    plant = evt.target.id;
    assignVars(plant);
  });
}

function doorOrYard() {
  if (($('input[id="rdo-door"]:checked').val() !== "on") && ($('input[id="rdo-yard"]:checked').val()) !== "on") {
    var slotType = "none"
  }
  else if (($('input[id="rdo-door"]:checked').val() === "on") && ($('input[id="rdo-yard"]:checked').val()) !== "on") {
    var slotType = "dock"
  }
  else {
    var slotType = "yard";
  }
  return slotType;  
} 

//main function, gets all the vars from the inputs and then builds the SQL
function generate() {
  
  $("#genTarget").html("");                                        //clear out generate target div
  var prefix = $('#prefix').val();                                 //grab the slot prefix
  var slotType = doorOrYard()                                      //grab the door or yard choice
  i = $("#startNum").val();                                        //grab the startNum
  n = $("#endNum").val();                                          //grab the endNum
  
  if (typeof(plant) == 'undefined') {                     
    alert('Please select a plant from the dropdown first.');
  }
  else if (slotType == 'none') {
    alert("Please select Dock Door or Yard Slot first");
  }
  else if (prefix.length < 1 ) {
    alert("Please enter a prefix like PHI or Yard");
  }
  else if (i.length < 1 || i < 1) {
    alert("Please enter a valid (above 0) start number");
  }
  else if (n.length < 1  || n < 1) {
    alert("Please enter a valid (above 0) end number");
  }
  else {
    for (i; i<= n; i++) {
      if (slotType == "yard") {
        strLocationHDR = "Insert into LOCN_HDR (LOCN_ID,WHSE,LOCN_CLASS,LOCN_BRCD,AREA,ZONE,AISLE,BAY,LVL,POSN,DSP_LOCN,LOCN_PICK_SEQ,SKU_DEDCTN_TYPE,SLOT_TYPE,PUTWY_ZONE,PULL_ZONE,PICK_DETRM_ZONE,LEN,WIDTH,HT,X_COORD,Y_COORD,Z_COORD,WORK_GRP,WORK_AREA,LAST_FROZN_DATE_TIME,LAST_CNT_DATE_TIME,CYCLE_CNT_PENDING,PRT_LABEL_FLAG,TRAVEL_AISLE,TRAVEL_ZONE,STORAGE_UOM,PICK_UOM,CREATE_DATE_TIME,MOD_DATE_TIME,USER_ID,SLOT_UNUSABLE,CHECK_DIGIT,VOCO_INTRNL_REVERSE_BRCD,LOCN_HDR_ID,WM_VERSION_ID,LOCN_PUTWY_SEQ,LOCN_DYN_ASSGN_SEQ,CREATED_DTTM,LAST_UPDATED_DTTM,FACILITY_ID) values (SEQ_LOCATION_ID.NEXTVAL,'<span class='red'>" + plant + "</span>','Y','<span class='red'>" + prefix + i + "</span>',null,null,null,null,null,null,'<span class='red'>" + prefix + i + "</span>',SEQ_LOCATION_ID.NEXTVAL,null,null,null,null,null,0,0,0,0,0,0,null,null,null,null,'N',null,null,null,null,null,to_date('24-APR-18','DD-MON-RR'),to_date('24-APR-18','DD-MON-RR'),'WMADMIN','N','YY', REVERSE('<span class='red'>" + prefix + i + "</span>'),LOCN_HDR_ID_SEQ.NEXTVAL,1,null,null,to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),<span class='red'>" + FID + "</span>);";
        strYardZoneSlot = "Insert into YARD_ZONE_SLOT (YARD_ID,YARD_ZONE_ID,YARD_ZONE_SLOT_ID,YARD_ZONE_SLOT_NAME,YARD_ZONE_SLOT_STATUS,X_COORDINATE,Y_COORDINATE,Z_COORDINATE,MAX_CAPACITY,USED_CAPACITY,MARK_FOR_DELETION,IS_GUARD_HOUSE,IS_THRESHOLD_GUARD_HOUSE,CREATED_DTTM,LAST_UPDATED_DTTM,LOCN_ID,CREATED_SOURCE,CREATED_SOURCE_TYPE,LAST_UPDATED_SOURCE,LAST_UPDATED_SOURCE_TYPE) values (<span class='red'>" + YID + "</span>,<span class='red'>" + YZID + "</span>,SEQ_YARD_ZONE_SLOT_ID.NEXTVAL,'<span class='red'>" + prefix + i + "</span>',204,0,0,0,1,0,0,0,0,to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),(SELECT LOCN_ID FROM LOCN_HDR WHERE LOCN_BRCD = '<span class='red'>" + prefix + i + "</span>'),'DATALOAD',2,'DATALOAD',2);"
        strLocation = "INSERT INTO LOCATION (SELECT SEQ_LOCATION_ID.NEXTVAL, 32, 1, YARD_ID, YARD_ZONE_ID, YARD_ZONE_SLOT_ID, NULL, 0, YARD_ZONE_SLOT_ID, 0, 0, SYSDATE, SYSDATE FROM YARD_ZONE_SLOT WHERE yard_zone_slot_name = '<span class='red'>" + prefix + i + "</span>');"
        strWhseSysCode = "Insert into WHSE_SYS_CODE (REC_TYPE,CODE_TYPE,WHSE,CODE_ID,CODE_DESC,SHORT_DESC,MISC_FLAGS,CREATE_DATE_TIME,MOD_DATE_TIME,USER_ID,WHSE_SYS_CODE_ID,SYS_CODE_TYPE_ID,WM_VERSION_ID,CREATED_DTTM,LAST_UPDATED_DTTM) values ('C','SLT','<span class='red'>" + plant + "','" + prefix + i + "','" + prefix + i + "','" + prefix + i + "</span>','0    0    0    0    ',to_date('09-DEC-17 06:09:17','DD-MON-RR HH24:MI:SS'),to_date('09-DEC-17 06:09:17','DD-MON-RR HH24:MI:SS'),null,WHSE_SYS_CODE_ID_SEQ.nextval,null,1,to_timestamp('09-DEC-17 06.09.17.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('19-APR-18 08.59.15.322137000 AM','DD-MON-RR HH.MI.SSXFF AM'));"
        $("#genTarget").append(strLocationHDR + "<br><br>").append(strYardZoneSlot + "<br><br>").append(strLocation + "<br><br>").append(strWhseSysCode + "<br><br>");
      }
      else {
        strLocationHDR = "Insert into LOCN_HDR (LOCN_ID,WHSE,LOCN_CLASS,LOCN_BRCD,AREA,ZONE,AISLE,BAY,LVL,POSN,DSP_LOCN,LOCN_PICK_SEQ,SKU_DEDCTN_TYPE,SLOT_TYPE,PUTWY_ZONE,PULL_ZONE,PICK_DETRM_ZONE,LEN,WIDTH,HT,X_COORD,Y_COORD,Z_COORD,WORK_GRP,WORK_AREA,LAST_FROZN_DATE_TIME,LAST_CNT_DATE_TIME,CYCLE_CNT_PENDING,PRT_LABEL_FLAG,TRAVEL_AISLE,TRAVEL_ZONE,STORAGE_UOM,PICK_UOM,CREATE_DATE_TIME,MOD_DATE_TIME,USER_ID,SLOT_UNUSABLE,CHECK_DIGIT,VOCO_INTRNL_REVERSE_BRCD,LOCN_HDR_ID,WM_VERSION_ID,LOCN_PUTWY_SEQ,LOCN_DYN_ASSGN_SEQ,CREATED_DTTM,LAST_UPDATED_DTTM,FACILITY_ID) values (SEQ_LOCATION_ID.NEXTVAL,'<span class='red'>" + plant + "</span>','Q','<span class='red'>" + prefix + i + "</span>',null,null,null,null,null,null,'<span class='red'>" + prefix + i + "</span>',SEQ_LOCATION_ID.NEXTVAL,null,null,null,null,null,0,0,0,0,0,0,null,null,null,null,'N',null,null,null,null,null,to_date('24-APR-18','DD-MON-RR'),to_date('24-APR-18','DD-MON-RR'),'WMADMIN','N','QQ', REVERSE('<span class='red'>" + prefix + i + "</span>'),LOCN_HDR_ID_SEQ.NEXTVAL,1,null,null,to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),<span class='red'>" + FID + "</span>);";
        strUpdateLocationHDR = "Update LOCN_HDR set locn_id = locn_hdr_id where locn_brcd = '<span class='red'>" + prefix + i + "</span>';";
        strUpdateDockDockDoor = "Update DOCK_DOOR set dock_door_locn_id = (select locn_id from locn_hdr where locn_brcd = '<span class='red'>" + prefix + i + "</span>') where description = '" + prefix + i + "';";
        strWhseSysCode = "Insert into WHSE_SYS_CODE (REC_TYPE,CODE_TYPE,WHSE,CODE_ID,CODE_DESC,SHORT_DESC,MISC_FLAGS,CREATE_DATE_TIME,MOD_DATE_TIME,USER_ID,WHSE_SYS_CODE_ID,SYS_CODE_TYPE_ID,WM_VERSION_ID,CREATED_DTTM,LAST_UPDATED_DTTM) values ('C','DDR','<span class='red'>" + plant + "','" + prefix + i + "','" + prefix + i + "','" + prefix + i + "</span>','0    0    0    0    ',to_date('09-DEC-17 06:09:17','DD-MON-RR HH24:MI:SS'),to_date('09-DEC-17 06:09:17','DD-MON-RR HH24:MI:SS'),null,WHSE_SYS_CODE_ID_SEQ.nextval,null,1,to_timestamp('09-DEC-17 06.09.17.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('19-APR-18 08.59.15.322137000 AM','DD-MON-RR HH.MI.SSXFF AM'));"
        $("#genTarget").append(strLocationHDR + "<br><br>").append(strUpdateLocationHDR + "<br><br>").append(strUpdateDockDockDoor + "<br><br>").append(strWhseSysCode + "<br><br>");
      }
    }
  }
}

//populates a readout to see what the display barcode will look like
function updatePrefixReadout() {
  $("#prefix").keyup( function () {
    $("#brcd-preview").html("Display Location Preview: " + $("#prefix").val() + "##");
  });
}

//updates the labels based on dock door or yard slot
function updateDoorLabels() {
  $('input[id="rdo-door"]').click(function () {
    $("#prefix-lbl").html("Enter dock door prefix:");
    $("#startNum-lbl").html("Enter dock door start number:");
    $("#endNum-lbl").html("Enter dock door end number:");
  });
}
//updates the labels based on dock door or yard slot
function updateYardLabels() {
  $('input[id="rdo-yard"]').click(function () {
    $("#prefix-lbl").html("Enter yard slot prefix:");
    $("#startNum-lbl").html("Enter yard slot start number:");
    $("#endNum-lbl").html("Enter yard slot end number:");
  });
}

function funcStart() {
  inits();
  updatePrefixReadout();
  updateYardLabels();
  updateDoorLabels();
  assignPlantVar();

}
