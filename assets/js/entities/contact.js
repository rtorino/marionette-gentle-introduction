ContactManager.module( "Entities", function( Entities, ContactManager, Backbone, Marionette, $, _ ) {
	Entities.Contact = Backbone.Model.extend( {
		defaults: {
			firstName  : "",
			lastName   : "",
			phoneNumber: "No Phone Number"
		}
	} );

	Entities.ContactCollection = Backbone.Collection.extend( {
		model     : Entities.Contact,
		comparator: "firstName"
	} );

	var contacts;

	var initiliazeContacts = function() {
		contacts = new Entities.ContactCollection( [ {
			id          : 1,
			firstName   : "Alice",
			lastName    : "Arten",
			phoneNumber : "555-0184"
		} ] );
	};

	var API = {
		getContactEntities: function() {
			if ( contacts === undefined ) {
				initiliazeContacts();
			}

			return contacts;
		}
	};

	ContactManager.reqres.setHandler( "contact:entities", function() {
		return API.getContactEntities();
	} );
} );