Menu = Class.extend({
    visible: true,

    views: [],

    init: function() {
        gGameEngine.botsCount = 4;
        gGameEngine.playersCount = 0;

        this.showLoader();
    },

    show: function(text) {
        this.visible = true;

        this.draw(text);
    },

    hide: function() {
        this.visible = false;

        for (var i = 0; i < this.views.length; i++) {
            gGameEngine.stage.removeChild(this.views[i]);
        }

        this.views = [];
    },

    update: function() {
        if (this.visible) {
            for (var i = 0; i < this.views.length; i++) {
                gGameEngine.moveToFront(this.views[i]);
            }
        }
    },

    setHandCursor: function(btn) {
        btn.addEventListener('mouseover', function() {
            document.body.style.cursor = 'pointer';
        });
        btn.addEventListener('mouseout', function() {
            document.body.style.cursor = 'auto';
        });
    },

    setMode: function(mode) {
        this.hide();

        if (mode == 'single') {
            gGameEngine.botsCount = 3;
            gGameEngine.playersCount = 1;
        } else {
            gGameEngine.botsCount = 2;
            gGameEngine.playersCount = 2;
        }

        gGameEngine.playing = true;
        gGameEngine.restart();
    },

    draw: function(text) {
        var that = this;

        // semi-transparent black background
        var bgGraphics = new createjs.Graphics().beginFill("rgba(0, 0, 0, 0.5)").drawRect(0, 0, gGameEngine.size.w, gGameEngine.size.h);
        var bg = new createjs.Shape(bgGraphics);
        gGameEngine.stage.addChild(bg);
        this.views.push(bg);

        // game title
        text = text || [{text: 'Bomber', color: '#ffffff'}, {text: ' Woman', color: '#ff4444'}];

        var title1 = new createjs.Text(text[0].text, "bold 35px Helvetica", text[0].color);
        var title2 = new createjs.Text(text[1].text, "bold 35px Helvetica", text[1].color);

        var titleWidth = title1.getMeasuredWidth() + title2.getMeasuredWidth();

        title1.x = gGameEngine.size.w / 2 - titleWidth / 2;
        title1.y = gGameEngine.size.h / 2 - title1.getMeasuredHeight() / 2 - 150;
        gGameEngine.stage.addChild(title1);
        this.views.push(title1);

        title2.x = title1.x + title1.getMeasuredWidth();
        title2.y = gGameEngine.size.h / 2 - title1.getMeasuredHeight() / 2 - 150;
        gGameEngine.stage.addChild(title2);
        this.views.push(title2);

        // modes buttons
        var modeSize = 120;
        var modesDistance = 20;
        var modesY = title1.y + title1.getMeasuredHeight() + 20;

        // singleplayer button
        var singleX = gGameEngine.size.w / 2 - modeSize - modesDistance + 80;
        var singleBgGraphics = new createjs.Graphics().beginFill("rgba(0, 0, 0, 0)").drawRect(singleX, modesY, modeSize, modeSize * 2);
        var singleBg = new createjs.Shape(singleBgGraphics);
        gGameEngine.stage.addChild(singleBg);
        this.views.push(singleBg);
        this.setHandCursor(singleBg);
        singleBg.addEventListener('click', function() {
            that.setMode('single');
        });

        var singleTitle1 = new createjs.Text("Press 1", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" to Start", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() - 70;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Press 0", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" to Exit", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() - 50;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Enter", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" to bomb", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() - 30;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("DPAD", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" to move", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() - 10;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Credits", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(":", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 15;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Tile Art Batch by", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" Hyptosis", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 35;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Boy Character by", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" sheep", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 55;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Girl character by", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" Radomir Dopieralski", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 75;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Explosion Sound Effect by", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" Adrian Gallant", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 95;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Thanks to", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text(" MattSkala", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 115;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        //

        var singleTitle1 = new createjs.Text("Code: ", "16px Helvetica", "#ff4444");
        var singleTitle2 = new createjs.Text("github.com/arma7x/bomberwoman", "16px Helvetica", "#ffffff");
        var singleTitleWidth = singleTitle1.getMeasuredWidth() + singleTitle2.getMeasuredWidth();
        var modeTitlesY = modesY + modeSize - singleTitle1.getMeasuredHeight() + 135;

        singleTitle1.x = singleX + (modeSize - singleTitleWidth) / 2;
        singleTitle1.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle1);
        this.views.push(singleTitle1)

        singleTitle2.x = singleTitle1.x + singleTitle1.getMeasuredWidth();
        singleTitle2.y = modeTitlesY;
        gGameEngine.stage.addChild(singleTitle2);
        this.views.push(singleTitle2)

        
        var iconsY = modesY;
        var singleIcon = new createjs.Bitmap("img/betty.png");
        singleIcon.sourceRect = new createjs.Rectangle(0, 0, 48, 48);
        singleIcon.x = singleX + (modeSize - 48) / 2;
        singleIcon.y = iconsY - 20;
        gGameEngine.stage.addChild(singleIcon);
        this.views.push(singleIcon);

        // multiplayer button
        //var multiX = gGameEngine.size.w / 2 + modesDistance;
        //var multiBgGraphics = new createjs.Graphics().beginFill("rgba(0, 0, 0, 0.5)").drawRect(multiX, modesY, modeSize, modeSize);
        //var multiBg = new createjs.Shape(multiBgGraphics);
        //gGameEngine.stage.addChild(multiBg);
        //this.views.push(multiBg);
        //this.setHandCursor(multiBg);
        //multiBg.addEventListener('click', function() {
            //that.setMode('multi');
        //});

        //var multiTitle1 = new createjs.Text("multi", "16px Helvetica", "#99cc00");
        //var multiTitle2 = new createjs.Text("player", "16px Helvetica", "#ffffff");
        //var multiTitleWidth = multiTitle1.getMeasuredWidth() + multiTitle2.getMeasuredWidth();

        //multiTitle1.x = multiX + (modeSize - multiTitleWidth) / 2;
        //multiTitle1.y = modeTitlesY;
        //gGameEngine.stage.addChild(multiTitle1);
        //this.views.push(multiTitle1)

        //multiTitle2.x = multiTitle1.x + multiTitle1.getMeasuredWidth();
        //multiTitle2.y = modeTitlesY;
        //gGameEngine.stage.addChild(multiTitle2);
        //this.views.push(multiTitle2)

        //var multiIconGirl = new createjs.Bitmap("img/betty.png");
        //multiIconGirl.sourceRect = new createjs.Rectangle(0, 0, 48, 48);
        //multiIconGirl.x = multiX + (modeSize - 48) / 2 - 48/2 + 8;
        //multiIconGirl.y = iconsY;
        //gGameEngine.stage.addChild(multiIconGirl);
        //this.views.push(multiIconGirl);

        //var multiIconBoy = new createjs.Bitmap("img/betty2.png");
        //multiIconBoy.sourceRect = new createjs.Rectangle(0, 0, 48, 48);
        //multiIconBoy.x = multiX + (modeSize - 48) / 2 + 48/2 - 8;
        //multiIconBoy.y = iconsY;
        //gGameEngine.stage.addChild(multiIconBoy);
        //this.views.push(multiIconBoy);
    },

    showLoader: function() {
        var bgGraphics = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, gGameEngine.size.w, gGameEngine.size.h);
        var bg = new createjs.Shape(bgGraphics);
        gGameEngine.stage.addChild(bg);

        var loadingText = new createjs.Text("Loading...", "20px Helvetica", "#FFFFFF");
        loadingText.x = gGameEngine.size.w / 2 - loadingText.getMeasuredWidth() / 2;
        loadingText.y = gGameEngine.size.h / 2 - loadingText.getMeasuredHeight() / 2;
        gGameEngine.stage.addChild(loadingText);
        gGameEngine.stage.update();
    }
});
