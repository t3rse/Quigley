describe("Quigley", function () {
    // initialize
    var mockMCE = (function () {
        return {
            init: function (obj) {
                obj.init_instance_callback();
            },
            editors: [
                    {
                        setContent: function (content) {
                            console.log(content);
                        }
                    }
                ]
        };
    })();

    Quigley.init(mockMCE, 
        $(document.createElement("button")),    
        $(document.createElement("button")),
        $(document.createElement("div")),    
        $(document.createElement("div")), 
        localStorage
    );


    it("Let's you write interesting stuff down!", function () {
        expect(true).toBeTruthy();
    });


});