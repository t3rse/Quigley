describe("Quigley", function () {

    /**********************************************************************************
    ***** QUIGLEY MOCK OBJECTS FOR TESTING********************************************
    **********************************************************************************/

    // mock version of TinyMCE editor to fake content assignment and initialization 
    // callback
    var mockMCE = (function () {
        return {
            init: function (obj) {
                obj.init_instance_callback();
            },
            editors: [
                    {
                        setContent: function (content) {
                            console.log(content);
                        },
                        save: function(){
                            return "Saved document";
                        }
                    }
                ]
        };
    })();

    // mock version of localStorage uses memory rather than persisting anything to files
    var mockStorage = (function () {
        var store = {};
        return {
            setItem: function (key, value) {
                store[key] = value;
            },
            getItem: function (key) {
                return store[key] || null;
            },
            removeItem: function (key) {
                delete store[key];
            }
        };
    })();

    // mock ui elements
    var mockAddButton = $(document.createElement("button"));

    // init with jquery created ui elements
    Quigley.init(mockMCE,
        mockAddButton,
        $(document.createElement("button")),
        $(document.createElement("div")),
        $(document.createElement("div")),
        mockStorage
    );

    /**********************************************************************************
    ***** QUIGLEY INTERNALS INITIALIZATION ********************************************
    **********************************************************************************/

    it("is a loaded module.", function () {
        expect(Quigley != null).toBeTruthy();
    });

    it("has a documentManagement object.", function () {
        expect(Quigley.internals.engine.documentManagement != null).toBeTruthy();
    });

    it("has an events object.", function () {
        expect(Quigley.internals.engine.events != null).toBeTruthy();
    });

    it("has a ui object.", function () {
        expect(Quigley.internals.engine.ui != null).toBeTruthy();
    });

    it("has a storage engine.", function () {
        expect(Quigley.internals.conf.storageEngine != null).toBeTruthy();
    });

    it("let's you add a document if you click.", function () {
        var docStore = Quigley.internals.engine.documentManagement.documentStore;
        var docCount = docStore.length;
        mockAddButton.click();
        expect(docStore.length = ++docCount).toBeTruthy();
    });


});