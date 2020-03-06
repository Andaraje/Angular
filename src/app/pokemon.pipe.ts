import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonpipe'
})
export class PokemonPipe implements PipeTransform {
  constructor() { }

  ngOnInit() {}
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

}
