import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from "ionic-angular";
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

    quoteGroup: {category: string, quotes: Quote[], icon: string};

    constructor(
        private navParams: NavParams,
        private alertCtrl: AlertController,
        private quotesService: QuotesService) {}

    ngOnInit() {
        this.quoteGroup = this.navParams.data;
    }

    onAddToFavorites(selectedQuote: Quote) {

        const alertCtrl = this.alertCtrl.create({
            title: 'Add Quote',
            subtitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        this.quotesService.addQuoteToFavorites(selectedQuote);
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    handler: () => {
                        console.log('No');
                    }
                }
            ]
        });

        alertCtrl.present();

    }

    onRemoveFromFavorites(selectedQuote: Quote) {

        this.quotesService.removeQuoteFromFavorites(selectedQuote);

    }

    isFavorite(quote: Quote) {

        return this.quotesService.isQuoteFavorite(quote);
    }

}
