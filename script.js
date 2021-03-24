$(function() {
    const quiz = [
        {
        question: 'ドラゴンボールの主人公はだれ？',
        answers: ['孫悟空','父悟空','子悟空'],
        correct: '孫悟空',
        hint: '2番ではなさそう'
        },{
        question: 'ワンピースの主人公はだれ？',
        answers: ['ラフィ','ロフィ','ルフィ'],
        correct: 'ルフィ',
        hint: '3番な気がするなあ'
        },{
        question: 'ボタンの色は何色？',
        answers: ['赤','青','黒'],
        correct: '黒',
        hint: 'すごい暗い色をしているような。。'
        }
    ];
    let index =0;
    let sum = 0;//正解数
    //クイズの問題をセット
    function question_set(i){
        $('#questiontext').text(quiz[i].question);
    }
    //ボタンに選択肢をセット
    function btn_set(i){
        $('#btn_deal > #btn').each(function(t,v){
            $(v).text(quiz[i].answers[t]);
        });
    }
    //ヒントをセット
    function hint_set(i){
        $('#hinttext').text(quiz[i].hint);
    }

    question_set(index);
    btn_set(index);
    hint_set(index);
    //ボタンをクリックしたときの処理
        $('button').on('click', function(){
            if(quiz[index].correct === $(this).text()){
                alert("正解");
                    sum++;
            }else{
                alert("不正解");
            }
            index++;
            if(index === quiz.length){
                    alert("終了！あなたの得点は"+sum+"/"+quiz.length+"点だよ");
                    return;
            } 
            question_set(index);
            btn_set(index);
            hint_set(index);
        });
        //ヒントが浮き上がる処理
        $('#wrapper').hover(
            function(){
            $('#hinttext').fadeIn();
          },
          function (){
            $('#hinttext').fadeOut();
          });
});