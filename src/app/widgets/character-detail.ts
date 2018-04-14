class CharacterDetail {

  constructor(private imageService, private characterService) {}

  getAvatar(thumbnail) {
    return this.imageService.getImage('standard_medium', thumbnail);
  }

  getCharacterImage(thumbnail) {
    return this.imageService.getImage('portrait_uncanny', thumbnail);
  }

  getCharacterLink(character) {
    return this.characterService.getCharacterDetailsUrl(character);
  }

}

angular
  .module('ngaApp.widgets')
  .component('ngaCharacterDetail', {
      controller: CharacterDetail,
      bindings: {
          character: '<'
      },
      templateUrl: 'app/widgets/character-detail.html'
  });
