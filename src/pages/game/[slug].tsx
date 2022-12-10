import GalleryMock from 'components/Gallery/Gallery.mock';
import GameInfoMock from 'components/GameInfo/GameInfo.mock';
import { GetStaticPropsResult, GetStaticPathsResult } from 'next';
import GameTemplate, { GameTemplateProps } from 'templates/Game/Game';

export default function Game(props: GameTemplateProps) {
  return <GameTemplate {...props} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<GameTemplateProps>> {
  const descriptionHTML = `<center><a href="https://www.cyberpunk.net/en/news/46420/patch-1-61-list-of-changes"><img src="https://items.gog.com/not_a_cp/en_de_fr_brpt_cyberpunk_patch_1.61.jpg"></a></center><br><center><a href="https://www.cyberpunk.net/en/news/45280/edgerunners-update-patch-1-6-list-of-changes"><img src="https://items.gog.com/not_a_cp/en_de_brpt_fr_edgerunners_patch_1.6.jpg"></a></center><hr><img src="https://items.gog.com/not_a_cp/addon_en.png"><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/action.mp4"></video><br><b>Cyberpunk 2077</b> is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/character.mp4"></video><br>Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/world.mp4"></video><br>
Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there. 
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/tech.mp4"></video><br>
Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/music.mp4"></video><br><h4>EQUIPPED WITH IMPROVEMENTS</h4>
Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more.
<br><br><h4>INCLUDES FREE ADDITIONAL CONTENT</h4>
Get your hands on a haul of free items including new guns and melee weapons, as well as extra customization options and more.
<br><br><hr><a target="“_blank”" href="https://lp.gog.com/cyberpunk-2077-hub/en"><img alt="" src="https://items.gog.com/not_a_cp/learn_more.png"></a><hr><center><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp1.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp2.png"></center><hr>

* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.

      
      <p class="description__copyrights">
      CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
  </p></div>`;

  return {
    props: {
      cover: '/img/games/cyberpunk-6.jpeg',
      gameInfo: GameInfoMock,
      gallery: GalleryMock.images,
      description: descriptionHTML
    }
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [
      {
        params: {
          slug: 'cyberpunk-2077'
        }
      }
    ],
    fallback: false
  };
}
