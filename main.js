$(document).ready(function(){
    
    var antivirusTag = document.getElementById('antivirus-tag'); //dont remove it
    if (!antivirusTag || antivirusTag.textContent.trim() !== 'made by chef1') {
        console.error('Antivirus script cannot run. Missing or invalid tag.');
        return;
    }

    
    $('#fileUpload').change(function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            
            if (contents.includes("malware") || contents.includes("IsDebuggerPresent")) {
                $('#result').text('File is suspicious. Take caution!');
                $('#result').css({'color': 'red', 'font-size': '2rem'}); 
            } else {
                $('#result').text('File is safe.');
                $('#result').css({'color': 'green', 'font-size': '2rem'}); 
            }
        };
        reader.readAsText(file);
    });
});
