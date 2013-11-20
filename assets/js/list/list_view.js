ContactManager.module( "ContactsApp.List", function( List, ContactManager, Backbone, Marionette, jQuery, _ ) {
	List.Contact = Marionette.ItemView.extend( {
		tagName  : "li",
		template : "#contact-list-item"
	} );

	List.Contacts = Marionette.CollectionView.extend( {
		tagName  : "ul",
		itemView : List.Contact
	} );
} );