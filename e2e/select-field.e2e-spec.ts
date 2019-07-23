import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Select field', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/select-field');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous multiple mode screenshot', (done) => {
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-multiple-mode'
    });
  });

  it('should match previous single mode screenshot', (done) => {
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-single-mode'
    });
  });

  it('should match previous single mode screenshot with validation', (done) => {
    element(by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')).click();
    element(by.css('.sky-modal-btn-close')).click();
    element(by.css('body')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('#screenshot-select-field-single-mode-wrapper').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-single-mode-validation'
    });
  });

  it('should match previous multiple mode selected screenshot', (done) => {
    element(by.css('#select-field-populate-selected-btn')).click();
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-multiple-mode-selected'
    });
  });

  it('should match previous single mode selected screenshot', (done) => {
    element(by.css('#select-field-populate-selected-btn')).click();
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-single-mode-selected'
    });
  });

  it('should match previous multiple mode selected screenshot with a long label', (done) => {
    SkyHostBrowser.setWindowBreakpoint('md');
    element(by.css('#select-field-populate-selected-long-btn')).click();
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-multiple-mode-long-label'
    });
  });

  it('should match previous single mode selected screenshot with a long label', (done) => {
    SkyHostBrowser.setWindowBreakpoint('md');
    element(by.css('#select-field-populate-selected-long-btn')).click();
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-single-mode-long-label'
    });
  });

  it('should match previous single mode picker screenshot', (done) => {
    element(by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')).click();

    SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(() => {
      element(by.css('.sky-modal-btn-close')).click();
      done();
    }, {
      screenshotName: 'select-field-single-mode-btn'
    });
  });

  it('should match previous multiple mode picker screenshot', (done) => {
    element(by.css('#screenshot-select-field-multiple-mode .sky-btn.sky-btn-default')).click();

    SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(() => {
      element(by.css('.sky-modal-btn-close')).click();
      done();
    }, {
      screenshotName: 'select-field-multiple-mode-btn'
    });
  });
});
