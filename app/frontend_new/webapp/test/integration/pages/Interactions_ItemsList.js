sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'frontendnew',
            componentId: 'Interactions_ItemsList',
            contextPath: '/Interactions_Items'
        },
        CustomPageDefinitions
    );
});