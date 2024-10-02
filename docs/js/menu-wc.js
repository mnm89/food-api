'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">food-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' :
                                            'id="xs-controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' :
                                        'id="xs-injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FoodsModule.html" data-type="entity-link" >FoodsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' : 'data-bs-target="#xs-controllers-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' :
                                            'id="xs-controllers-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' }>
                                            <li class="link">
                                                <a href="controllers/FoodsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' : 'data-bs-target="#xs-injectables-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' :
                                        'id="xs-injectables-links-module-FoodsModule-7f25bc53bac0aa3e69a4f63d5717a9a81ba7bde50730926a78cfc159af4116d8106b6cb14506fd532a0d656af86bb08c059c474b99af45ea23db464dc2704932"' }>
                                        <li class="link">
                                            <a href="injectables/FoodsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MealsModule.html" data-type="entity-link" >MealsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' : 'data-bs-target="#xs-controllers-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' :
                                            'id="xs-controllers-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' }>
                                            <li class="link">
                                                <a href="controllers/MealsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' : 'data-bs-target="#xs-injectables-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' :
                                        'id="xs-injectables-links-module-MealsModule-9799347e61f788ee2bdfe53f23c28d8515bf2f155736ab8755135090eb84fb15a7d8828b689799f6e37f94d80be1f6d8f2b3ef4952acf2d4e9fc4be6458e5b3d"' }>
                                        <li class="link">
                                            <a href="injectables/MealsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryFood.html" data-type="entity-link" >CategoryFood</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryResponse.html" data-type="entity-link" >CreateCategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFoodDto.html" data-type="entity-link" >CreateFoodDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFoodResponse.html" data-type="entity-link" >CreateFoodResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMealDto.html" data-type="entity-link" >CreateMealDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMealResponse.html" data-type="entity-link" >CreateMealResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllCategoriesResponse.html" data-type="entity-link" >FindAllCategoriesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllFoodsResponse.html" data-type="entity-link" >FindAllFoodsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllMealsResponse.html" data-type="entity-link" >FindAllMealsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneCategoryResponse.html" data-type="entity-link" >FindOneCategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneFoodResponse.html" data-type="entity-link" >FindOneFoodResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneMealResponse.html" data-type="entity-link" >FindOneMealResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Food.html" data-type="entity-link" >Food</a>
                            </li>
                            <li class="link">
                                <a href="classes/Meal.html" data-type="entity-link" >Meal</a>
                            </li>
                            <li class="link">
                                <a href="classes/MealFood.html" data-type="entity-link" >MealFood</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveCategoryResponse.html" data-type="entity-link" >RemoveCategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveFoodResponse.html" data-type="entity-link" >RemoveFoodResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveMealResponse.html" data-type="entity-link" >RemoveMealResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryResponse.html" data-type="entity-link" >UpdateCategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFoodDto.html" data-type="entity-link" >UpdateFoodDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFoodResponse.html" data-type="entity-link" >UpdateFoodResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMealDto.html" data-type="entity-link" >UpdateMealDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMealResponse.html" data-type="entity-link" >UpdateMealResponse</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SeedService.html" data-type="entity-link" >SeedService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});