function inits() {
  let plant = "";
  let FID = 0;
  let YID = 0;
  let YZID = 0;
  let strPrefix = "";
  let strLocationHDR = 0;
  let startNum = 5;
  let endNum = 10;
  
/*   WHSE = ST2
  FID = 507 ;select whse, facility_id from facility where whse like '';
  YID = 407 ;SELECT YARD_ID FROM YARD_ZONE_SLOT;
  YZID = 465 ;SELECT YARD_ZONE_ID FROM YARD_ZONE_SLOT; */

  $("#genForm").submit(function(e) {
      e.preventDefault();
  });
  console.log("inits are inited");
}


function assignPlantVar() {
  $(".plant-btn").click(function(evt) {
    plant = evt.target.id;
    assignVars(plant);
  });
}

function generate() {
  prefix = $('#prefix').val();
  
  if (plant == "") {
    alert('Please select a plant from the dropdown first.')
  }
  else {
    i = $("#startNum").val();
    n = $("#endNum").val();
    for (i; i<= n; i++) {
      strLocationHDR = "Insert into LOCN_HDR (LOCN_ID,WHSE,LOCN_CLASS,LOCN_BRCD,AREA,ZONE,AISLE,BAY,LVL,POSN,DSP_LOCN,LOCN_PICK_SEQ,SKU_DEDCTN_TYPE,SLOT_TYPE,PUTWY_ZONE,PULL_ZONE,PICK_DETRM_ZONE,LEN,WIDTH,HT,X_COORD,Y_COORD,Z_COORD,WORK_GRP,WORK_AREA,LAST_FROZN_DATE_TIME,LAST_CNT_DATE_TIME,CYCLE_CNT_PENDING,PRT_LABEL_FLAG,TRAVEL_AISLE,TRAVEL_ZONE,STORAGE_UOM,PICK_UOM,CREATE_DATE_TIME,MOD_DATE_TIME,USER_ID,SLOT_UNUSABLE,CHECK_DIGIT,VOCO_INTRNL_REVERSE_BRCD,LOCN_HDR_ID,WM_VERSION_ID,LOCN_PUTWY_SEQ,LOCN_DYN_ASSGN_SEQ,CREATED_DTTM,LAST_UPDATED_DTTM,FACILITY_ID) values (SEQ_LOCATION_ID.NEXTVAL,'" + plant + "','Y','" + prefix + " " + i + "',null,null,null,null,null,null,'" + prefix + " " + i + "',SEQ_LOCATION_ID.NEXTVAL,null,null,null,null,null,0,0,0,0,0,0,null,null,null,null,'N',null,null,null,null,null,to_date('24-APR-18','DD-MON-RR'),to_date('24-APR-18','DD-MON-RR'),'WMADMIN','N','YY', REVERSE('" + prefix + " " + i + "'),LOCN_HDR_ID_SEQ.NEXTVAL,1,null,null,to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM')," + FID + ");";
      $("#genTarget").append(strLocationHDR + "<br><br>");
    }
  }
}

function assignVars(plant) {
  if (plant == "ABQ") {
    FID = 436;
    YID = 388;
    YZID = 426;
    console.log(FID + " " + YID  + " " + YZID);
  }
  else {
    alert("You must pick a plant before generating SQL");
  }
}


function funcStart() {
  inits();
  assignPlantVar();
  
}

/*  Send, --%BRCD%{ENTER}
  Clipboard = Insert into LOCN_HDR (LOCN_ID,WHSE,LOCN_CLASS,LOCN_BRCD,AREA,ZONE,AISLE,BAY,LVL,POSN,DSP_LOCN,LOCN_PICK_SEQ,SKU_DEDCTN_TYPE,SLOT_TYPE,PUTWY_ZONE,PULL_ZONE,PICK_DETRM_ZONE,LEN,WIDTH,HT,X_COORD,Y_COORD,Z_COORD,WORK_GRP,WORK_AREA,LAST_FROZN_DATE_TIME,LAST_CNT_DATE_TIME,CYCLE_CNT_PENDING,PRT_LABEL_FLAG,TRAVEL_AISLE,TRAVEL_ZONE,STORAGE_UOM,PICK_UOM,CREATE_DATE_TIME,MOD_DATE_TIME,USER_ID,SLOT_UNUSABLE,CHECK_DIGIT,VOCO_INTRNL_REVERSE_BRCD,LOCN_HDR_ID,WM_VERSION_ID,LOCN_PUTWY_SEQ,LOCN_DYN_ASSGN_SEQ,CREATED_DTTM,LAST_UPDATED_DTTM,FACILITY_ID) values (SEQ_LOCATION_ID.NEXTVAL,'%WHSE%','Y','%BRCD%',null,null,null,null,null,null,'%BRCD%',SEQ_LOCATION_ID.NEXTVAL,null,null,null,null,null,0,0,0,0,0,0,null,null,null,null,'N',null,null,null,null,null,to_date('24-APR-18','DD-MON-RR'),to_date('24-APR-18','DD-MON-RR'),'WMADMIN','N','YY', REVERSE('%BRCD%'),LOCN_HDR_ID_SEQ.NEXTVAL,1,null,null,to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),%FID%);
  Send, ^v{ENTER}{ENTER}

  Clipboard = Insert into YARD_ZONE_SLOT (YARD_ID,YARD_ZONE_ID,YARD_ZONE_SLOT_ID,YARD_ZONE_SLOT_NAME,YARD_ZONE_SLOT_STATUS,X_COORDINATE,Y_COORDINATE,Z_COORDINATE,MAX_CAPACITY,USED_CAPACITY,MARK_FOR_DELETION,IS_GUARD_HOUSE,IS_THRESHOLD_GUARD_HOUSE,CREATED_DTTM,LAST_UPDATED_DTTM,LOCN_ID,CREATED_SOURCE,CREATED_SOURCE_TYPE,LAST_UPDATED_SOURCE,LAST_UPDATED_SOURCE_TYPE) values (%YID%,%YZID%,SEQ_YARD_ZONE_SLOT_ID.NEXTVAL,'%BRCD%',204,0,0,0,1,0,0,0,0,to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('24-APR-18 10.51.38.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),(SELECT LOCN_ID FROM LOCN_HDR WHERE LOCN_BRCD = '%BRCD%'),'DATALOAD',2,'DATALOAD',2);
  Send, ^v{ENTER}{ENTER}

  Clipboard = INSERT INTO LOCATION (SELECT SEQ_LOCATION_ID.NEXTVAL, 32, 1, YARD_ID, YARD_ZONE_ID, YARD_ZONE_SLOT_ID, NULL, 0, YARD_ZONE_SLOT_ID, 0, 0, SYSDATE, SYSDATE FROM YARD_ZONE_SLOT WHERE yard_zone_slot_name = '%BRCD%');
  Send, ^v{ENTER}{ENTER}*/
