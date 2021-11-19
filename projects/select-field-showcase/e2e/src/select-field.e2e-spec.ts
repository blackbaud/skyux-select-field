import { by, element } from 'protractor';

import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('Select field', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/select-field');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous multiple mode screenshot', async (done) => {
    await SkyHostBrowser.scrollTo('#screenshot-select-field-multiple-mode');
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'select-field-multiple-mode',
      }
    );
  });

  it('should match previous single mode screenshot', async (done) => {
    await SkyHostBrowser.scrollTo('#screenshot-select-field-single-mode');
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'select-field-single-mode',
      }
    );
  });

  it('should match previous single mode screenshot with validation', async (done) => {
    await element(
      by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')
    ).click();
    await element(by.css('.sky-modal-btn-close')).click();
    await element(by.css('body')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    await SkyHostBrowser.scrollTo(
      '#screenshot-select-field-single-mode-wrapper'
    );
    expect(
      '#screenshot-select-field-single-mode-wrapper'
    ).toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-single-mode-validation',
    });
  });

  it('should match previous multiple mode selected screenshot', async (done) => {
    await element(by.css('#select-field-populate-selected-btn')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    await SkyHostBrowser.scrollTo('#screenshot-select-field-multiple-mode');
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'select-field-multiple-mode-selected',
      }
    );
  });

  it('should match previous single mode selected screenshot', async (done) => {
    await element(by.css('#select-field-populate-selected-btn')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    await SkyHostBrowser.scrollTo('#screenshot-select-field-single-mode');
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'select-field-single-mode-selected',
      }
    );
  });

  it('should match previous multiple mode selected screenshot with a long label', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('md');
    await element(by.css('#select-field-populate-selected-long-btn')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    await SkyHostBrowser.scrollTo('#screenshot-select-field-multiple-mode');
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'select-field-multiple-mode-long-label',
      }
    );
  });

  it('should match previous single mode selected screenshot with a long label', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('md');
    await element(by.css('#select-field-populate-selected-long-btn')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    await SkyHostBrowser.scrollTo('#screenshot-select-field-single-mode');
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'select-field-single-mode-long-label',
      }
    );
  });

  it('should match previous single mode picker screenshot', async (done) => {
    await element(
      by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')
    ).click();

    await SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(
      async () => {
        await element(by.css('.sky-modal-btn-close')).click();
        done();
      },
      {
        screenshotName: 'select-field-single-mode-btn',
      }
    );
  });

  it('should match previous multiple mode picker screenshot', async (done) => {
    await element(
      by.css('#screenshot-select-field-multiple-mode .sky-btn.sky-btn-default')
    ).click();

    await SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(
      async () => {
        await element(by.css('.sky-modal-btn-close')).click();
        done();
      },
      {
        screenshotName: 'select-field-multiple-mode-btn',
      }
    );
  });

  it('should match previous picker add new record button screenshot', async (done) => {
    await element(
      by.css(
        '#screenshot-select-field-add-new-record-button .sky-input-group.sky-btn'
      )
    ).click();

    await SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal .sky-list-toolbar-search').toMatchBaselineScreenshot(
      async () => {
        await element(by.css('.sky-modal-btn-close')).click();
        done();
      },
      {
        screenshotName: 'select-field-add-new-record-btn',
      }
    );
  });

  it('should match previous picker add new record button screenshot (xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');

    await element(
      by.css(
        '#screenshot-select-field-add-new-record-button .sky-input-group.sky-btn'
      )
    ).click();

    await SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal .sky-list-toolbar-search').toMatchBaselineScreenshot(
      async () => {
        await element(by.css('.sky-modal-btn-close')).click();
        done();
      },
      {
        screenshotName: 'select-field-add-new-record-btn-xs',
      }
    );
  });
});
