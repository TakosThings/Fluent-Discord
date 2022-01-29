# Build checklist
**Pre commit**
- [ ] Update version in `/src/modules/core/metadata`
- [ ] Execute `npm run build`

**Commit**
- [ ] Commit `/src/modules/core/metadata` only
- [ ] Commit message is `Bump version > 0.0.*`

**PR**
- [ ] Correct version in PR title
- [ ] Close any open issues in the pull commit

**Release**
- [ ] Correct tag version
- [ ] Target correct branch (master)
- [ ] Correct version in title
- [ ] Changelog pasted into body
- [ ] CSS files are uploaded
