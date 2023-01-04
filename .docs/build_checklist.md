# Build checklist
**Pre commit**
- [ ] Update version in `/src/modules/core/metadata`
- [ ] Execute `npm run build-static`
  - [ ] Run `npm run build-auto` if changes to user vars have been made.

**Commit**
- [ ] Commit `/src/modules/core/metadata` only
- [ ] Commit message is `Bump version > 1.7.*`

**Actions**
- [ ] Run make-release

**Release**
- [ ] Correct tag version
- [ ] Correct version in title
- [ ] Example release body:
```
Highlights:
* Merge PR # by @ - Description
* HIGHLIGHT

[Full Changelog](https://github.com/TakosThings/Fluent-Discord/compare/v1.7.0...v1.7.*)
```
- [ ] Ensure version numbers to compare are correct
- [ ] Contributors to merged PRs are credited
- [ ] CSS files are uploaded

**Issues**
- [ ] Close issues resolved in this release
