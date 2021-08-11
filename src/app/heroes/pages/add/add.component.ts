import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../models/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogBoxComponent } from '../../components/confirmation-dialog-box/confirmation-dialog-box.component';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styles: [
        `
            img {
                width: 100%;
                border-radius: 5px;
            }
        `,
    ],
})
export class AddComponent implements OnInit {
    public publishers: String[] = ['Marvel Comics', 'DC Comics'];
    public heroeId: string = '';
    public heroe: Heroe = {
        superhero: '',
        alter_ego: '',
        characters: '',
        first_appearance: '',
        publisher: Publisher.MarvelComics,
        alt_img: '',
    };

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private snackBar: MatSnackBar,
        private heroesService: HeroesService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({ id }) => (this.heroeId = id));

        if (this.heroeId) {
            this.heroesService
                .getHeroeById(this.heroeId)
                .subscribe((resp) => (this.heroe = resp));
        }
    }

    public saveHeroe() {
        if (this.heroe.superhero.trim().length !== 0) {
            if (this.heroeId) {
                this.heroesService
                    .updateHeroe(this.heroe)
                    .subscribe((heroe) =>
                        this.showSnackBar(`${heroe.superhero} updated!`)
                    );
            } else {
                this.heroesService.addHeroe(this.heroe).subscribe((heroe) => {
                    this.showSnackBar(`${heroe.superhero} added!`);
                    this.router.navigate(['/heroes/edit', heroe.id]);
                });
            }
        }
    }
    
    public requestConfirmation() {
        const dialog = this.dialog.open(ConfirmationDialogBoxComponent, {
            data: this.heroe
        });

        dialog.afterClosed().subscribe((result) => {
            if (result) this.deleteHeroe();
        });
    }

    public deleteHeroe() {
        this.heroesService
            .deleteHeroe(this.heroeId)
            .subscribe(() => {
                this.router.navigate(['/heroes/catalogue'])
                this.showSnackBar('Heroe removed!')
            });
    }

    public showSnackBar(message: string) {
        this.snackBar.open(message, 'Close', {
            duration: 3500,
        });
    }
}
