ContactManager.module( "ContactsApp.List", function( List, ContactManager, Backbone, Marionette, jQuery, _ ) {
	List.Contact = Marionette.ItemView.extend( {
		tagName: "tr",
		template: "#contact-list-item",

		events: {
			"click"                  : "highlightName",
			"click td a.js-show"     : "showClicked",
			"click button.js-delete" : "deleteClicked"
		},

		highlightName: function( e ) {
			e.preventDefault();
			this.$el.toggleClass( "warning" );
		},

		showClicked: function( e ) {
			e.preventDefault();
			e.stopPropagation();
			this.trigger( "contact:show", this.model );
		},

		deleteClicked: function( e ) {
			e.stopPropagation();
			this.trigger( "contact:delete", this.model );
		},

		remove: function() {
			this.$el.fadeOut( function() {
				Marionette.ItemView.prototype.remove.call( self );
			} );
		}
	} );

	List.Contacts = Marionette.CompositeView.extend( {
		tagName           : "table",
		className         : "table table-hover",
		template          : "#contact-list",
		itemView          : List.Contact,
		itemViewContainer : "tbody",

		onItemviewContactDelete: function() {
			this.$el.fadeOut( 1000, function() {
				$( this ).fadeIn( 1000 );
			} );
		}
	} );
} );