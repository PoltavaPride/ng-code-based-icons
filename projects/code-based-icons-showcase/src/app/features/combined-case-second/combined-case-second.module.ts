import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  CodeBasedIconsModule,
  CodeBasedIconsRegistryService
} from 'projects/code-based-icons/src/public-api';
import { CombinedCaseSecondComponent } from './combined-case-second.component';
import {
  codeBasedIconActivateLarge,
  codeBasedIconAddUserLarge,
  codeBasedIconArrowRightLarge,
  codeBasedIconArrowSortDownLarge,
  codeBasedIconArrowSortUpLarge,
  codeBasedIconArrowUpLarge,
  codeBasedIconArticleLarge,
  codeBasedIconAssuranceLarge,
  codeBasedIconAvailabilityLarge,
  codeBasedIconBillingLarge,
  codeBasedIconBookmarkLarge,
  codeBasedIconBulletLarge,
  codeBasedIconCalendarLarge,
  codeBasedIconCallbackLarge,
  codeBasedIconCameraLarge,
  codeBasedIconCartAddLarge,
  codeBasedIconCartEmptyLarge,
  codeBasedIconCartFullLarge,
  codeBasedIconCategoriesLarge,
  codeBasedIconCheckboxPlusCheckedLarge,
  codeBasedIconCheckboxPlusLarge,
  codeBasedIconClearLarge,
  codeBasedIconContactLarge,
  codeBasedIconCreateLarge,
  codeBasedIconCrossLarge,
  codeBasedIconCurrencyLarge,
  codeBasedIconDangerSolidLarge,
  codeBasedIconDeactivateUserLarge,
  codeBasedIconDictateLarge,
  codeBasedIconDirectionLarge,
  codeBasedIconDiscussionLarge,
  codeBasedIconDocumentLarge,
  codeBasedIconDownloadLarge,
  codeBasedIconEditLarge,
  codeBasedIconEducationLarge,
  codeBasedIconFacebookLarge,
  codeBasedIconFavoriteHeartLarge,
  codeBasedIconFavoriteStarLarge,
  codeBasedIconFilterLarge,
  codeBasedIconFlagLarge,
  codeBasedIconGpsLarge,
  codeBasedIconGraphLarge,
  codeBasedIconHamburgerLarge,
  codeBasedIconHidePassLarge,
  codeBasedIconInfoLarge,
  codeBasedIconInfoSolidLarge,
  codeBasedIconInfosoloLarge,
  codeBasedIconInstagramLarge,
  codeBasedIconKakaoLarge,
  codeBasedIconLaptopLarge,
  codeBasedIconLinkedinLarge,
  codeBasedIconListLarge,
  codeBasedIconLocationLarge,
  codeBasedIconLockLarge,
  codeBasedIconLodLarge,
  codeBasedIconLogoutLarge,
  codeBasedIconMailLarge,
  codeBasedIconMapLarge,
  codeBasedIconMifLarge,
  codeBasedIconMoveToLarge,
  codeBasedIconOverflowHorizLarge,
  codeBasedIconOverflowVertLarge,
  codeBasedIconPdfLarge,
  codeBasedIconPhoneLarge,
  codeBasedIconPinterestLarge,
  codeBasedIconPlayLarge,
  codeBasedIconPlusLarge,
  codeBasedIconPrintLarge,
  codeBasedIconProductsLarge,
  codeBasedIconProfileLarge,
  codeBasedIconQuestionLarge,
  codeBasedIconRadioPlusCheckedLarge,
  codeBasedIconRadioPlusLarge,
  codeBasedIconReSortLarge,
  codeBasedIconRemoveLarge,
  codeBasedIconReplyLarge,
  codeBasedIconResetLarge,
  codeBasedIconScanLarge,
  codeBasedIconSearchLarge,
  codeBasedIconSelectAllCheckedLarge,
  codeBasedIconSelectAllLarge,
  codeBasedIconShareLarge,
  codeBasedIconShipmentLarge,
  codeBasedIconShowPassLarge,
  codeBasedIconSortDown,
  codeBasedIconSortUnsorted,
  codeBasedIconSortUp,
  codeBasedIconSpannerAngledLarge,
  codeBasedIconSpannerLarge,
  codeBasedIconStartOverLarge,
  codeBasedIconSubscriptionLarge,
  codeBasedIconSuccessSolidLarge,
  codeBasedIconTagLarge,
  codeBasedIconThumbsUpLarge,
  codeBasedIconTickLarge,
  codeBasedIconTimeLarge,
  codeBasedIconTransferLarge,
  codeBasedIconTrashLarge,
  codeBasedIconTwitterLarge,
  codeBasedIconUnsorted,
  codeBasedIconUploadLarge,
  codeBasedIconUsersLarge,
  codeBasedIconVkLarge,
  codeBasedIconVoltageLarge,
  codeBasedIconWarningLarge,
  codeBasedIconWarningSolidLarge,
  codeBasedIconWorldLarge,
  codeBasedIconXingLarge,
  codeBasedIconYoutubeLarge,
  codeBasedIconZoomInLarge,
  codeBasedIconZoomOutLarge
} from 'projects/code-based-icons/icons';

const routes: Routes = [{ path: '', component: CombinedCaseSecondComponent }];

@NgModule({
  declarations: [CombinedCaseSecondComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CodeBasedIconsModule]
})
export class CombinedCaseSecondModule {
  constructor(
    private codeBasedIconsRegistryService: CodeBasedIconsRegistryService
  ) {
    this.codeBasedIconsRegistryService.registerIcons([
      codeBasedIconActivateLarge,
      codeBasedIconAddUserLarge,
      codeBasedIconArrowRightLarge,
      codeBasedIconArrowSortDownLarge,
      codeBasedIconArrowSortUpLarge,
      codeBasedIconArrowUpLarge,
      codeBasedIconArticleLarge,
      codeBasedIconAssuranceLarge,
      codeBasedIconAvailabilityLarge,
      codeBasedIconBillingLarge,
      codeBasedIconBookmarkLarge,
      codeBasedIconBulletLarge,
      codeBasedIconCalendarLarge,
      codeBasedIconCallbackLarge,
      codeBasedIconCameraLarge,
      codeBasedIconCartAddLarge,
      codeBasedIconCartEmptyLarge,
      codeBasedIconCartFullLarge,
      codeBasedIconCategoriesLarge,
      codeBasedIconCheckboxPlusCheckedLarge,
      codeBasedIconCheckboxPlusLarge,
      codeBasedIconClearLarge,
      codeBasedIconContactLarge,
      codeBasedIconCreateLarge,
      codeBasedIconCrossLarge,
      codeBasedIconCurrencyLarge,
      codeBasedIconDangerSolidLarge,
      codeBasedIconDeactivateUserLarge,
      codeBasedIconDictateLarge,
      codeBasedIconDirectionLarge,
      codeBasedIconDiscussionLarge,
      codeBasedIconDocumentLarge,
      codeBasedIconDownloadLarge,
      codeBasedIconEditLarge,
      codeBasedIconEducationLarge,
      codeBasedIconFacebookLarge,
      codeBasedIconFavoriteHeartLarge,
      codeBasedIconFavoriteStarLarge,
      codeBasedIconFilterLarge,
      codeBasedIconFlagLarge,
      codeBasedIconGpsLarge,
      codeBasedIconGraphLarge,
      codeBasedIconHamburgerLarge,
      codeBasedIconHidePassLarge,
      codeBasedIconInfoLarge,
      codeBasedIconInfoSolidLarge,
      codeBasedIconInfosoloLarge,
      codeBasedIconInstagramLarge,
      codeBasedIconKakaoLarge,
      codeBasedIconLaptopLarge,
      codeBasedIconLinkedinLarge,
      codeBasedIconListLarge,
      codeBasedIconLocationLarge,
      codeBasedIconLockLarge,
      codeBasedIconLodLarge,
      codeBasedIconLogoutLarge,
      codeBasedIconMailLarge,
      codeBasedIconMapLarge,
      codeBasedIconMifLarge,
      codeBasedIconMoveToLarge,
      codeBasedIconOverflowHorizLarge,
      codeBasedIconOverflowVertLarge,
      codeBasedIconPdfLarge,
      codeBasedIconPhoneLarge,
      codeBasedIconPinterestLarge,
      codeBasedIconPlayLarge,
      codeBasedIconPlusLarge,
      codeBasedIconPrintLarge,
      codeBasedIconProductsLarge,
      codeBasedIconProfileLarge,
      codeBasedIconQuestionLarge,
      codeBasedIconRadioPlusCheckedLarge,
      codeBasedIconRadioPlusLarge,
      codeBasedIconReSortLarge,
      codeBasedIconRemoveLarge,
      codeBasedIconReplyLarge,
      codeBasedIconResetLarge,
      codeBasedIconScanLarge,
      codeBasedIconSearchLarge,
      codeBasedIconSelectAllCheckedLarge,
      codeBasedIconSelectAllLarge,
      codeBasedIconShareLarge,
      codeBasedIconShipmentLarge,
      codeBasedIconShowPassLarge,
      codeBasedIconSortDown,
      codeBasedIconSortUnsorted,
      codeBasedIconSortUp,
      codeBasedIconSpannerAngledLarge,
      codeBasedIconSpannerLarge,
      codeBasedIconStartOverLarge,
      codeBasedIconSubscriptionLarge,
      codeBasedIconSuccessSolidLarge,
      codeBasedIconTagLarge,
      codeBasedIconThumbsUpLarge,
      codeBasedIconTickLarge,
      codeBasedIconTimeLarge,
      codeBasedIconTransferLarge,
      codeBasedIconTrashLarge,
      codeBasedIconTwitterLarge,
      codeBasedIconUnsorted,
      codeBasedIconUploadLarge,
      codeBasedIconUsersLarge,
      codeBasedIconVkLarge,
      codeBasedIconVoltageLarge,
      codeBasedIconWarningLarge,
      codeBasedIconWarningSolidLarge,
      codeBasedIconWorldLarge,
      codeBasedIconXingLarge,
      codeBasedIconYoutubeLarge,
      codeBasedIconZoomInLarge,
      codeBasedIconZoomOutLarge
    ]);
  }
}
