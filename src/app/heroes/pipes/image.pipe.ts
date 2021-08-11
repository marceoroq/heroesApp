import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroe.interface';

@Pipe({
    name: 'image',
})
export class ImagePipe implements PipeTransform {
    transform(heroe: Heroe): string {
        if (!heroe.id || ('alt_img' in heroe && !heroe.alt_img)) {
            return 'assets/no-image.png';
        } else if (heroe.alt_img) {
            return heroe.alt_img;
        } else {
            return `assets/heroes/${heroe.id}.jpg`;
        }
    }
}
