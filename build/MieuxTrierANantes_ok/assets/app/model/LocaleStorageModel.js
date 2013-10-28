Ext.define('VivreANantes.model.LocaleStorageModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['locale', 'query'],
        proxy: {
            type: 'localstorage',
            id  : 'twitter-Searches'
        }
    }
});