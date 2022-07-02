# Build checklist
**Pre commit**
- [ ] Update version in `/src/modules/core/metadata`
- [ ] Execute `npm run build-static`
  - [ ] Run `npm run build-auto` if changes to user vars have been made.

**Commit**
- [ ] Commit `/src/modules/core/metadata` only
- [ ] Commit message is `Bump version > 1.3.*`

**Actions**
- [ ] Run make-release

**Release**
- [ ] Correct tag version
- [ ] Correct version in title
- [ ] Release body is
```
## What's Changed
[Full Changelog](https://github.com/TakosThings/Fluent-Discord/compare/v1.3.1...v1.3.*)
```
- [ ] Ensure version numbers to compare are correct
- [ ] Add highlights of any major changes (if any)
- [ ] CSS files are uploaded

**Issues**
- [ ] Close issues resolved in this release
