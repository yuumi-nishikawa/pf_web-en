$(function(){
    //送信ボタンをクリックしたタイミングで検証
    $('form').on('submit',function(){
    //エラー用の変数を作成
    var error;
    //エラーメッセージを初期化
    $(this).find('.error').remove();

    //必須項目の検証
    $(this).find('.required').each(function(){
        if($(this).val() === ""){
        //値が取得できない場合はエラーを返す
        error = true;
        //値が取得できない場合はエラーメッセージを表示
        $(this).after('<span class="error">未入力です</span>');
        }
    });

    //送信ボタンの制御
    if(error){
        return false;
    }
    });
});