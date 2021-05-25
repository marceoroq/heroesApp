import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroe.interface';


@Pipe({
    name: 'image'
})
export class ImagePipe implements PipeTransform {
    transform(heroe: Heroe): string {
        return `assets/heroes/${heroe.id}.jpg`;
    }
}
