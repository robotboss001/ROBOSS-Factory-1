onEvent('player.logged_in', event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give(Item.of('akashictome:tome', '{"akashictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},bigreactors:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bigreactors:erguide"}},botania:{Count:1b,id:"botania:lexicon",tag:{"akashictome:displayName":{text:\'{"translate":"item.botania.lexicon"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.botania.lexicon"}]}\'}}},cyclic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:cyclic_guide_book"}},extendedcrafting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}},ftbquests:{Count:1b,id:"ftbquests:book",tag:{"akashictome:displayName":{text:\'{"translate":"item.ftbquests.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.ftbquests.book"}]}\'}}},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},integratedtunnels:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"},laserio:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},powah:{Count:1b,id:"powah:book"},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},securitycraft:{Count:1b,id:"securitycraft:sc_manual"},simplyjetpacks:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyjetpacks:guidebook"}},solcarrot:{Count:1b,id:"solcarrot:food_book",tag:{"akashictome:displayName":{text:\'{"translate":"item.solcarrot.food_book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.solcarrot.food_book"}]}\'}}},tconstruct:{Count:1b,id:"tconstruct:encyclopedia"},thermal:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}},twilightforest:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"twilightforest:guide"}}},"akashictome:is_morphing":1b}'))
    }
  })