var image=[

    "https://www.clipartkey.com/mpngs/m/94-941941_mother-cartoon-drawing-drawing-of-a-mom.png",
    "https://i.pinimg.com/originals/87/b8/3b/87b83ba77a10a1d3313ed7872918524d.jpg",
    "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6",
    "https://us.123rf.com/450wm/yupiramos/yupiramos1907/yupiramos190750113/127194931-happy-student-girl-with-school-bag-vector-illustration-design.jpg?ver=6"];

    var names= [
        "Mom- Neelu",
        "Dad- Eliyas",
        "Sister- Niha",
        "Myself- Dia"
    ];

    var i=0;
function Next(){
 if(i==4){
   i=0;
 }
   document.getElementById("Book").src=image[i];
  i++;
}

