function WelcomeTest(){
  var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":50,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"ed45209145968657","currentMotionStateDuration":45,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
  ProcessJson(jsonString);
}


/*-------------------------S8  ||  G6-------------------------------*/
/*--------------------------- S8 VERTICAL-------------------------*/
function S8V_G6L(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
    ProcessJson(jsonString);
  }
  
  function S8V_G6V(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
    ProcessJson(jsonString);
  }
  
  function S8V_G6R(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
    ProcessJson(jsonString);
  }
  
  /*--------------------------- S8 Right-------------------------*/
  function S8R_G6L(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
    ProcessJson(jsonString);
  }
  
  function S8R_G6V(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
    ProcessJson(jsonString);
  }
  
  function S8R_G6R(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
    ProcessJson(jsonString);
  }
  
  /*--------------------------- S8 LEFT-------------------------*/
  function S8L_G6L(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
    ProcessJson(jsonString);
  }
  
  function S8L_G6V(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
    ProcessJson(jsonString);
  }
  
  function S8L_G6R(){
    var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"},{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
    ProcessJson(jsonString);
  }




  
    /*-------------------------G6||S8-------------------------------*/
  /*--------------------------- G6 VERTICAL-------------------------*/
    function G6V_S8R(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
      ProcessJson(jsonString);
    }
    
    function G6V_S8V(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
      ProcessJson(jsonString);
    }
  
    function G6V_S8L(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
      ProcessJson(jsonString);
    }
  
  /*--------------------------- G6 RIGHT-------------------------*/
    function G6R_S8L(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
      ProcessJson(jsonString);
    }
  
    function G6R_S8V(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
      ProcessJson(jsonString);
    }
  
    function G6R_S8R(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
      ProcessJson(jsonString);
    }
  /*--------------------------- G6 LEFT-------------------------*/
    function G6L_S8L(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
      ProcessJson(jsonString);
    }
  
    function G6L_S8V(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
      ProcessJson(jsonString);
    }
  
    function G6L_S8R(){
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"},{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
      ProcessJson(jsonString);
    }



  
    /*---------------------------SINGLE---------------------*/
  
     function S8Vertical() {
      var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
      ProcessJson(jsonString);
    }
  
    function S8Left() {
      var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
      ProcessJson(jsonString);
    }
    function S8Right() {
      var jsonString = '[{"Id":"881908feb12d0b14","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
      ProcessJson(jsonString);
    }
  
    function G6Vertical() {
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"VERTICAL"}]';
      ProcessJson(jsonString);
    }
  
    function G6Left() {
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"LEFT_SIDE"}]';
      ProcessJson(jsonString);
    }
  
    function G6Right() {
      var jsonString = '[{"Id":"ed45209145968657","currentMotionStateDuration":5,"isMoving":false,"lastMotionStateDuration":1,"orientation":"RIGHT_SIDE"}]';
      ProcessJson(jsonString);
    }