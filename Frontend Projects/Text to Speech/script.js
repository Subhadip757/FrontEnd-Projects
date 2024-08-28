document.addEventListener('DOMContentLoaded',function(){
    const textArea = document.getElementById('text');
    const speakButton = document.getElementById('btn');

    speakButton.addEventListener('click',()=>{
        const textToSpeak = textArea.value;
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance();
            speech.text = textToSpeak;

            speechSynthesis.speak(speech);
        } else{
            alaert('Text-to-speech is not supporteed in your browser. Please try again.');
        }
    })
})