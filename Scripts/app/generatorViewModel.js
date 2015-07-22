var htg = htg || {};
$(function () {
    htg.generatorViewModel = function () {

        var surfWords = ko.observableArray(),
            boardWords = ko.observableArray(),
            generateWords = ko.observableArray(),
            theHashes = ko.observable(),
            countOptions = ko.observableArray(),
            selectedCount = ko.observable(),
            generateBtnText = ko.observable('Generate'),
            letsDoThis = ko.observable(false),
            igTagCeiling = 30,

        generateTags = function () {
            
            letsDoThis(true);
            theHashes('');
            var surfCeiling = surfWords().length;            
            var boardCeiling = boardWords().length;
            var genWordCeiling = generateWords().length;
            var tempHashes='';
            
            for (var i = 1; i <= selectedCount(); i++)
            {
                var surfIndex = Math.floor((Math.random() * surfCeiling)); //could be zero for zero based index array
                var boardIndex = Math.floor((Math.random() * boardCeiling)); //could be zero for zero based index array

                tempHashes = tempHashes + '#' + surfWords()[surfIndex] + boardWords()[boardIndex] + ' ';
            }

            var genTextIndex = Math.floor((Math.random() * genWordCeiling));
            generateBtnText(generateWords()[genTextIndex]);

            theHashes(tempHashes);
        },

        selectText = function()
        {            
            $('#ta_theHashes').select();
        },

        init = function () {

            var surfWordsTemp = new Array();
            var boardWordsTemp = new Array();

            surfWordsTemp.push('cerf');
            surfWordsTemp.push('cirf');
            surfWordsTemp.push('czerf');
            surfWordsTemp.push('czirf');
            surfWordsTemp.push('czerph');
            surfWordsTemp.push('czirph');
            surfWordsTemp.push('psurf');
            surfWordsTemp.push('psirf');
            surfWordsTemp.push('pserf');
            surfWordsTemp.push('psurf');
            surfWordsTemp.push('psurph');

            surfWordsTemp.push('surf');
            surfWordsTemp.push('sirf');
            surfWordsTemp.push('surph');
            surfWordsTemp.push('sirph');
            surfWordsTemp.push('serph');
            surfWordsTemp.push('sarf');
            surfWordsTemp.push('sarph');
            surfWordsTemp.push('suhrf');
            surfWordsTemp.push('suhrph');
            surfWordsTemp.push('serf');

            surfWordsTemp.push('tsurph');
            surfWordsTemp.push('tsirf');
            surfWordsTemp.push('tsirph');
            surfWordsTemp.push('tsurph');
            surfWordsTemp.push('tsurf');

            surfWordsTemp.push('xerf');
            surfWordsTemp.push('xerph');
            surfWordsTemp.push('xurf');
            surfWordsTemp.push('xurph');
            surfWordsTemp.push('xirf');
            surfWordsTemp.push('xirph');

            surfWordsTemp.push('zurf');
            surfWordsTemp.push('zurph');
            surfWordsTemp.push('zirph');
            surfWordsTemp.push('zirf');
            surfWordsTemp.push('zerf');
            surfWordsTemp.push('zerph');

            surfWords(surfWordsTemp);


            boardWordsTemp.push('Bard');
            boardWordsTemp.push('Bahrd');
            boardWordsTemp.push('Bahrt');
            boardWordsTemp.push('Bardh');

            boardWordsTemp.push('Berrd');
            boardWordsTemp.push('Bert');
            //boardWordsTemp.push('Beoardh');
            boardWordsTemp.push('Behrd');

            boardWordsTemp.push('Bherd');
            boardWordsTemp.push('Bhird');

            boardWordsTemp.push('Board');
            boardWordsTemp.push('Boart');
            boardWordsTemp.push('Bourd');
            boardWordsTemp.push('Bored');
            boardWordsTemp.push('Bort');
            boardWordsTemp.push('Bord');
            boardWordsTemp.push('Borhd');

            boardWordsTemp.push('Bohred');
            boardWordsTemp.push('Buhrd');
            boardWordsTemp.push('Burdh');
            boardWordsTemp.push('Burd');

            boardWords(boardWordsTemp);


            generateWordsTemp = new Array();
            generateWordsTemp.push('Re-Generate');
            generateWordsTemp.push('Ok, do it again');
            generateWordsTemp.push('Otra Vez!');
            generateWordsTemp.push('Hmm, re-do!');
            generateWordsTemp.push('I wanna do over');
            generateWordsTemp.push('Fancy another go?');
            generateWordsTemp.push('Again?');
            generateWordsTemp.push('Annnnddd theennn??');
            generateWordsTemp.push('Once more?');
            
            generateWords(generateWordsTemp);

            var tmpCounts = new Array();

            for(var i=1; i <= igTagCeiling; i++)
            {
                tmpCounts.push({'value':i,'label':i});
            }

            countOptions(tmpCounts);

            $('#sel_count').on('change', function () {
                setTimeout(function () {
                    if (letsDoThis())
                    {
                        htg.generatorViewModel.GenerateTags();
                    }                    
                }, 250);
            });

        };

        init();

        return {
            //fields            
            SelectedCount: selectedCount,
            GenerateBtnText: generateBtnText,
            TheHashes:theHashes,
            //collections
            CountOptions:countOptions,
            BoardWord: boardWords,
            SurfWords: surfWords,
            //functions 
            GenerateTags: generateTags,
            SelectText: selectText
            
        }
    }();
    ko.applyBindings(htg.generatorViewModel);
});