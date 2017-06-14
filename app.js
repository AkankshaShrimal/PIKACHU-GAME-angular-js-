angular.module("pika",[])
.controller("pickachuCtrl",pickachuCtrl)


 function pickachuCtrl($interval,$scope)
{
    var game = this;
    game.player1 = 0;
    game.over = 0;
    game.level = 1;
    game.hero = -1;
    game.villan = -1;
    game.temp=0;
    game.startCount = 0;
    var clicked = false;
    var setinterval_called = 0;
    var count=0 ;
    
    var start=0;
    game.divArray = [[0,1,2],[3,4,5],[6,7,8]];

    game.startAgain = function(){ 
                                    game.over = 0;
                                    game.player1 = 0;
                                     game.hero=-1;
                                     game.villan = -1;
                                     setinterval_called = 0;
                                     if (angular.isDefined(game.myInterval))
                                     {   $interval.cancel(game.myInterval);}

                                     game.startCount = 0;
                                     
                                    }
    game.levelUp = function()
                            {
                                game.startCount = 0;
                                 game.hero=-1;
                                     game.villan = -1;
                                     setinterval_called = 0;
                                     if (angular.isDefined(game.myInterval))
                                     {   $interval.cancel(game.myInterval);}
                                    
                                game.level++;
                                game.temp = 1;
                                game.player1 = 0;
                                

                            }

    game.generation = function()
    {
                game.temp = 0;  
                console.log("time:",(2000 - (game.level-1)*200));
                game.myInterval = $interval(function(){
                                                        setinterval_called++;
                                                        if(!game.over && setinterval_called>3)
                                                        {
                                                        if(clicked ==true)
                                                             {}
                                                        else
                                                            {game.player1--;count = 0;}
                                                        }
                                                        if(game.player1<0)
                                                             game.over = 1;
                                                        

                                                        game.hero =game.values()[0];
                                                        game.villan = game.values()[1]
                                                        clicked = false;
                                                    },(2000 - (game.level-1)*200)); 
                game.startCount = 1;
            
        
        
    }

    game.values = function(){
                                 
                                do{
                                var x = Math.floor(Math.random()*8);
                                 var y =Math.floor(Math.random()*8);
                                }while(x==y);
                                
                                
                                 console.log("no",x,y);
                                 return [x,y];
                                
                            }
      

      game.score = function(t)
      {
          clicked = true;
          if(!game.over)
          {
                 if(game.hero==t)
                {
                    count++;
                     if(count==3)
                    {
                        game.player1+=5;
                        count=0;
                    }
                    else
                        game.player1++;
                    }
                else if(game.villan==t)
                    {
                    game.player1-=3;

                    if(game.player1<0)
                        game.over = 1;
                     count = 0;
                    }
                    if(game.player1>=15)
                        {game.levelUp();count=0;}
          }
      
    }
}
   
                                   



